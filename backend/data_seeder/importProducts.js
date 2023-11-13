import Product from "../models/ProductModel.js";
import User from "../models/userModel.js";
import { popularProducts } from "../data/data.js";
import DBconnection from "../DBconnection.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
DBconnection();

const importProducts = async () => {
  try {
    await Product.deleteMany();
    const adminUser = await User.find({ email: "admin@email.com" });

    const productAndUser = popularProducts.map((product) => {
      return { ...product, user: adminUser[0]._id };
    });
    const products = await Product.insertMany(productAndUser);
  } catch (err) {
    console.log(err);
  }
};

importProducts();
