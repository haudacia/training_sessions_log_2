import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.MONGO_URL;
let mongodb;

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === "test") {
      mongodb = await MongoMemoryServer.create();
      dbUrl = mongodb.getUri();
      console.log(dbUrl);
    }

    await mongoose.connect(dbUrl);
    const mongo = mongoose.connection;
    mongo.on("error", (error) => console.error(error));
  } catch (error) {
    console.log(error);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongodb) {
      await mongodb.stop();
    }
  } catch (error) {
    console.log(error);
  }
};

export { connectDB, disconnectDB };
