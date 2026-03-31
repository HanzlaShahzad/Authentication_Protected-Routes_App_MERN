import express from "express";
import { LoginUser } from "../controller/user.js";
import User from "../models/user.js";
import { tokenUser, ValidateToken } from "../services/userToken.js";
import Signin from "../controller/signin.js";
import createItems from "../controller/items.js";
import Items from "../models/items.js";
const router = express.Router();

router.post('/login', LoginUser);
router.get('/login', async (req, res) => {
  const user = await User.find({});
  return res.json({ user, tokenUser });
});
router.post('/signin', Signin);
router.post('/items', createItems);
router.get('/items', async (req, res) => {
  const items = await Items.find({});
  return res.json({ items });
});
export default router;