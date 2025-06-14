import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
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