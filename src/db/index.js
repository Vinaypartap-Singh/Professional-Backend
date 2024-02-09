import mongoose from "mongoose";

import { DB_NAME } from "../contants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`\n mongodb connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Failed: ", error);
    // Process exit has different code to exit process
    process.exit(1);
  }
};

export default connectDB;
