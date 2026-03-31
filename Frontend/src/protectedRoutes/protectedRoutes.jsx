import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrtectedRoutes({ children }) {
  const { token } = useSelector((state) => state.postProduct);
  console.log(token);
  if (token === undefined) return null;
  return token ? children : <Navigate to="/signin" replace></Navigate>;
}
