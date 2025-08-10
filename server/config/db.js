import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "App",
    });
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
  }
};


process.on("uncaughtException", (error) => {
  console.error(" Uncaught Exception:", error);
  process.exit(1);
});

export default connectDb;
