import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const userAuth = async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken.id);
      console.log(decodedToken);

      next();
    } catch (err) {
      console.log(err);
      res.status(401).json("Invalid token");
    }
  } else {
    res.status(401).json("Not authorized, no token");
  }
};

export default userAuth;
