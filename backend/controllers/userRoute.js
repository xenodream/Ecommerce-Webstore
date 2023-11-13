import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import userAuth from "../middleware/authMiddleware.js";
const router = express.Router();

//GET all users

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    console.log(err);
  }
});

//Create JWT

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

//POST: Logout user

router.post("/logout", async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json("Logged out successfully");
  } catch (err) {
    console.log(err);
  }
});

//POST: Register new user

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      isAdmin: false,
    });

    await newUser.save();

    const token = createToken(newUser._id);

    res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
    return res.status(200).json({ email: newUser.email, name: newUser.name });
  } catch (err) {
    console.log(err);
  }
});

//POST: User login

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json("Invalid credentials");
    }

    //Comparing requested password and password in DB

    bcrypt.compare(req.body.password, user.password, function (err, data) {
      if (err) {
        console.log(err);
      }

      if (data) {
        const token = createToken(user._id);

        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
        });
        return res.status(200).json({ email: user.email, name: user.name });
      } else {
        return res.status(401).json("Invalid credentials");
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//Get user profile

router.get("/logged", userAuth, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.log(err);
  }
});

//Update user information
router.put("/update", async (req, res) => {
  try {
    let userId = req.body.id;
    const updatedUser = await User.updateOne(
      { _id: userId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: await bcrypt.hash(req.body.password, 10),
        },
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
  }
});

//GET user by ID

router.get("/:id", async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

export default router;
