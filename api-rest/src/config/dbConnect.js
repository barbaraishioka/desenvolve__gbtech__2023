import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://barbaraishioka:123@node-express.baye9km.mongodb.net/alura-node",
);

let db = mongoose.connection;

export default db;
