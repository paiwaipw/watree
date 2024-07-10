"use server";
import { db } from "@/lib/firestore";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

export const fetchOneTree = async (id: string) => {
  try {
    const treeRef = doc(db, "trees", id);
    const treeDoc = await getDoc(treeRef);
    if (!treeDoc.exists()) {
      return null;
    }
    return treeDoc.data();
  } catch (error) {
    return null;
  }
};
