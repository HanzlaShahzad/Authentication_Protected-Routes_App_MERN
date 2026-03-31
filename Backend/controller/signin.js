import User from "../models/user.js";

async function Signin(req, res) {
  try {
    const { email, password } = req.body;
    const token = await User.matchPasswordAndCreateToken(email, password);
    if (!token) return res.status(404).json({ msg: 'user email or password not found' });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
export default Signin;