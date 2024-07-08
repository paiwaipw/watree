import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firestore";
import bucket from "@/lib/cloudBucket";

import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import csv from "csv-parser";
import { Readable } from "stream";
import { parse, isValid } from "date-fns";

const validateRow = (row: any) => {
  let { Date: date, Time: time, Flowrate: flowrate } = row;
  // Validate and parse Date
  const parsedDate = parse(date, "d/MM/yyyy", new Date());
  if (!isValid(parsedDate)) {
    throw new Error(`Invalid date format: ${date}`);
  }
  // Validate Time
  // const timeRegex = /^([01]?\d|2[0-3])\.[0-5]?\d\.[0-5]?\d$/;
  // if (!timeRegex.test(time)) {
  //   throw new Error(`Invalid time format: ${time}`);
  // }
  if (!time) {
    throw new Error(`There is a null value in time column`);
  }
  // Split time into hours, minutes, and seconds
  let [hours, minutes, seconds] = time.split(".").map(Number);
  if (seconds === undefined) {
    [hours, minutes, seconds] = time.split(":").map(Number);
  }
  // Combine Date and Time into a single timestamp
  const timestamp = new Date(parsedDate.setHours(hours, minutes, seconds));
  // Validate Flowrate
  if (!flowrate) {
    throw new Error(`Invalid flowrate format: ${flowrate}`);
  }
  return {
    timestamp: timestamp.toISOString(), // Converting to ISO string for Firestore
    Flowrate: flowrate,
  };
};

export const POST = async (req: NextRequest) => {
  try {
    const form = await req.formData();
    const file = form.get("file") as File;
    if (!file) {
      return new Response("Tidak ada dokumen", { status: 400 });
    }
    // Check if the uploaded file is a CSV
    const fileType = file.type.split("/")[1];
    if (fileType !== "csv") {
      return new Response("File harus berformat CSV", { status: 400 });
    }
    // Read the file data and create a Buffer
    const buffer = await file.arrayBuffer();
    const csvBuffer = Buffer.from(buffer);
    const csv_id = uuidv4();
    // Generate a unique filename for the CSV
    const filename = `${csv_id}.csv`;
    const folderPath = "csv";
    const destination = `${folderPath}/${filename}`;
    // Check file size
    const maxSizeBytes = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSizeBytes) {
      return new Response("File terlalu besar (maksimal 20MB)", {
        status: 400,
      });
    }

    // Upload the CSV to Gcloud bucket
    await bucket.file(destination).save(csvBuffer, {
      metadata: {
        contentType: file.type,
      },
    });
    // Get the public URL of the uploaded csv
    const csvUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
    // Save record with csv URL in Firestore
    await setDoc(doc(db, "archive_csv", csv_id), {
      id: csv_id,
      csvUrl,
      uploaded: new Date().toISOString(),
    });

    // process the csv data to update trees data in firestore
    const readable = new Readable();
    readable._read = () => {};
    readable.push(csvBuffer);
    readable.push(null);

    const treesCollection = collection(db, "trees");
    const results = [];

    await new Promise<void>((resolve, reject) => {
      readable
        .pipe(csv())
        .on("data", async (row) => {
          try {
            const validatedRow = validateRow(row);
            // console.log(validatedRow);
            const treeId = uuidv4();
            const treeDoc = doc(treesCollection, treeId);
            await setDoc(treeDoc, {
              id: treeId,
              ...validatedRow,
            });
            results.push(validatedRow);
          } catch (error: any) {
            console.error(`Error processing row: ${error.message}`);
            reject(error);
          }
        })
        .on("end", () => {
          console.log("Resolved!");
          resolve();
        })
        .on("error", (error) => {
          console.error("CSV processing error:", error);
          reject(error);
        });
    });

    return new Response("Sukses mengupdate data pohon", { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
