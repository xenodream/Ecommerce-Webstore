import User from "../models/userModel.js";
import DBconnection from "../DBconnection.js";
import env from "dotenv";
import bcrypt from "bcrypt";
env.config();
DBconnection();

const importUsers = async () => {
  try {
    //delete existig users
    await User.deleteMany();

    const adminUser = new User({
      name: "Admin User",
      email: "admin@email.com",
      password: await bcrypt.hash("123456", 10),
      isAdmin: true,
    });

    const regularUser = new User({
      name: "Regular User",
      email: "user@email.com",
      password: await bcrypt.hash("123456", 10),
      isAdmin: true,
    });

    await adminUser.save();
    await regularUser.save();
    console.log(adminUser);
    console.log(regularUser);
    console.log("Users saved to DB");
  } catch (err) {
    console.log(err);
  }
};

importUsers();
