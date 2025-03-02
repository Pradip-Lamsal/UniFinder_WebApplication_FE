import axios from "axios";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", { username, password }, { withCredentials: true });
      
      alert(res.data.message);

      if (res.data.isAdmin) {
        window.location.href = "http://localhost:5173/admin/dashboard"; // Redirect admin to dashboard
      } else {
        window.location.href = "/"; // Redirect normal user to home
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Side - Image */}
      <div className="w-1/2 h-full hidden md:flex items-center justify-center bg-gray-100">
        <img src={assets.loginn} alt="Login Illustration" className="w-3/4 rounded-xl shadow-lg" />
      </div>

      {/* Right Side - Login Box */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-[90%] md:w-96 p-8 bg-white rounded-3xl shadow-lg">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img src={assets.loggo} alt="Logo" className="w-16 mb-2" />
            <h2 className="text-2xl font-semibold text-gray-700">Welcome to UniFinder</h2>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            
            <div className="relative">
              <FaUser className="absolute left-5 top-4 text-gray-500 text-lg" />
              <input
                type="text"
                className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-5 top-4 text-gray-500 text-lg" />
              <input
                type="password"
                className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-shadow shadow-md hover:shadow-lg"
            >
              Login
            </button>

            <div className="flex justify-between text-gray-600 text-sm">
              <span>Don’t have an account?</span>
              <a href="/register" className="hover:underline text-green-600">Create Account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;