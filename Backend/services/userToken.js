import jwt from "jsonwebtoken";

const secret = "omg5papag";

export function tokenUser(user) {
  const obj = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
  };
  const token = jwt.sign(obj, secret, { expiresIn: '1D' });
  return token;
};

export function ValidateToken(token) {
  try {
    const verification = jwt.verify(token, secret);
    return verification;
  } catch (error) {
    return error;
  }
}