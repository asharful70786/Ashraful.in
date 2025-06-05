import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ashraful");
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
}

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

export default connectDb;