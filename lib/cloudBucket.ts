import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: "watree",
  keyFilename: "./serviceaccount.json",
});
const bucket = storage.bucket("watree_bucket");

export default bucket;
