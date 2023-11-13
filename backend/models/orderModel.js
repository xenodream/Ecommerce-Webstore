import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderedItems: [
      {
        qty: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },

        price: {
          type: String,
          required: true,
        },

        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
  },
  { timestamps: true }
);

const Order = new mongoose.model("Order", orderSchema);

export default Order;
