import mongoose from "mongoose";
import { createHmac, randomBytes } from "crypto";
import { tokenUser } from "../services/userToken.js";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  }
});

userSchema.pre("save", function (next) {
  const user = this;
  const password = user.password;

  const passDigits = randomBytes(10).toString("hex");
  const hashPassword = createHmac("sha256", passDigits).update(password).digest("hex");

  user.salt = passDigits;
  user.password = hashPassword;
});

userSchema.static("matchPasswordAndCreateToken", async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  };

  const hashPass = createHmac("sha256", user.salt).update(password).digest("hex");

  if (hashPass !== user.password) throw new Error("Incorrect password");

  const token = tokenUser(user);
  return token;
})

const User = mongoose.model("user", userSchema);
export default User;