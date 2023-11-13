import express from "express";
import Product from "../models/ProductModel.js";
import userAuth from "../middleware/authMiddleware.js";
const router = express.Router();

//update product after purchase

router.put("/productupdate", async (req, res) => {
  try {
    let productsArray = req.body;
    for (let i = 0; i < productsArray.length; i++) {
      const product = await Product.updateMany(
        { _id: productsArray[i].id },
        {
          $set: {
            smallQuantity: productsArray[i].smallQuantity,
            extraSmallQuantity: productsArray[i].extraSmallQuantity,
            mediumQuantity: productsArray[i].mediumQuantity,
            largeQuantity: productsArray[i].largeQuantity,
          },
        }
      );
      console.log(productsArray[i].id);
    }
  } catch (err) {
    console.log(err);
  }
});

//get products by category

router.get("/:category", async (req, res) => {
  try {
    const categoryItems = await Product.find({ category: req.params.category });
    res.json(categoryItems);
  } catch (err) {
    console.log(err);
  }
});

//get all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.json(allProducts);
  } catch (err) {
    console.log(err);
  }
});

//get product by id

router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id });
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

export default router;
