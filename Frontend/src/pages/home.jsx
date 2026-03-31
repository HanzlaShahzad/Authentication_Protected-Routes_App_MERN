import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-96">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome</h1>

        <p className="text-gray-500 mb-8">
          Please sign in or create a new account
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            <Link to="/signin">Sign In</Link>
          </button>

          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
