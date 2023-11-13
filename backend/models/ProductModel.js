import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  extraSmallQuantity: {
    type: Number,
    required: true,
  },
  smallQuantity: {
    type: Number,
    required: true,
  },
  mediumQuantity: {
    type: Number,
    required: true,
  },
  largeQuantity: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = new mongoose.model("Product", productSchema);

export default Product;
