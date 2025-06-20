import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "App",
    });
    console.log(" DB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}


process.on("uncaughtException", (error) => {
  console.error(" Uncaught Exception:", error);
  process.exit(1);
});

export default connectDb;
