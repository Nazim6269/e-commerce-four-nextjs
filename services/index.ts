import { mongoUrl } from "@/secret";
import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.info("DB connectded successfully");
  } catch (error) {
    console.error("Failed to connect DB");
  }
};
