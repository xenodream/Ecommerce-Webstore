import express from "express";
import Order from "../models/orderModel.js";
import userAuth from "../middleware/authMiddleware.js";
import mongoose from "mongoose";

const router = express.Router();

//Create new order
router.post("/", userAuth, async (req, res) => {
  try {
    if (req.user) {
      const user = req.user;
      const newOrder = new Order({
        user: user,
        address: req.body.address,
        phone: req.body.phone,
        totalPrice: req.body.totalPrice,
        orderedItems: req.body.items,
      });

      await newOrder.save();
      res.status(200).json(newOrder);
    } else {
      res.status(401).json("Not authorized");
    }
  } catch (err) {
    console.log(err);
  }
});

//Get all orders from specific user
router.get("/allorders", userAuth, async (req, res) => {
  try {
    const userOrders = await Order.find({ user: req.user._id });
    res.json(userOrders);
  } catch (err) {
    console.log(err);
  }
});

export default router;
