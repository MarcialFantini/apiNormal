import { connect } from "mongoose";

export const connectMongoDb = async () => {
  try {
    const uri = "mongodb://localhost:27017";
    await connect(uri);
    console.log("connect To DB Completed ");
  } catch (error) {
    console.error("Error to connect DB");
  }
};
