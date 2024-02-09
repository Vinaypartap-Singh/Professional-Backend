import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

// Optimized Code

dotenv.config({
  path: "./env",
});

connectDB();

// Better Approach to connect with db

// ifee function

// Approach 1 to connect DB using ifee function and try catch

/*

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

*/
