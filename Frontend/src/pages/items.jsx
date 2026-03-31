import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsPost } from "../Thunks/itemsThunk";
import { logout } from "../Slices/logout";
import { persistor } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Items() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.items);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" && email === "") return;
    dispatch(itemsPost({ name: name, email: email }));
    setEmail("");
    setName("");
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
    persistor.purge();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add User
        </h2>
        <span>
          <button
            className="w-20 h-8 rounded-2xl bg-red-600 text-white font-bold text-sm relative right-0 top-0"
            onClick={handleLogout}
          >
            Logout
          </button>
        </span>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {data && data.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-700">Users:</h3>
            {data.map((item, index) => (
              <div key={index} className="bg-gray-100 p-2 rounded mb-2 text-sm">
                {item.name} - {item.email}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
