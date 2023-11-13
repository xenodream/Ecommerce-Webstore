import express from "express";
import mongoose from "mongoose";
import DBconnection from "./DBconnection.js";
import productRoute from "./controllers/productRoute.js";
import userRoute from "./controllers/userRoute.js";
import orderRoute from "./controllers/orderRoute.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
//Connect to database
DBconnection();

//home route
app.get("/", (req, res) => {
  res.send("Fashionstore server is running");
});

//productRoute
app.use("/api/products", productRoute);

//userRoute
app.use("/api/users", userRoute);

//orderRoute
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
