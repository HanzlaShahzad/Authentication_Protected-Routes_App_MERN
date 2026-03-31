import { useState } from "react";
import { useDispatch } from "react-redux";
import { postProducts } from "../Thunks/signinThunk.jsx";
import { useNavigate } from "react-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") return;
    const res = await dispatch(
      postProducts({ email: email, password: password }),
    );

    setEmail("");
    setPassword("");

    if (res.meta.requestStatus === "fulfilled") {
      const token = localStorage.getItem("token");

      if (token) {
        navigate("/items");
      } else {
        Error("User not found");
      }
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?
          <button className="text-blue-500 cursor-pointer ml-1">Sign up</button>
        </p>
      </div>
    </div>
  );
}
