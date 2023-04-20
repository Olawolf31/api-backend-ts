import mongoose from "mongoose";
import { DB_URL } from ".";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("connected to database");
  } catch (error: unknown) {
    if (typeof error === "string") {
      console.log(error);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
