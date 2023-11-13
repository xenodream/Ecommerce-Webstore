import mongoose from "mongoose";
import env from "dotenv";
env.config();
const DBconnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

export default DBconnection;
