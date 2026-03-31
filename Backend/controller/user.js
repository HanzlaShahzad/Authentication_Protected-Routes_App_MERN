import User from "../models/user.js";
import { tokenUser, ValidateToken } from "../services/userToken.js";

export async function LoginUser(req, res) {
  try {

    const { fullName, email, password } = req.body;

    const user = await User.create({
      fullName,
      email,
      password,
    });

    const token = tokenUser(user);
    const verifyToken = ValidateToken(token);
    console.log("verifyToken=====>: ", verifyToken)

    return res.status(201).json({
      message: "User created",
      token,
      user,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}  