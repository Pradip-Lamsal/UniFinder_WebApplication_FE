import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { assets } from "../../assets/assets";
;

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", formData);
      setSuccess(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Side - Image Section */}
      <div className="w-1/2 h-full hidden md:flex items-center justify-center bg-gray-100">
        <img src={assets.register} alt="Register Illustration" className="w-3/4 rounded-xl shadow-lg" />
      </div>

      {/* Right Side - Register Box */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-[90%] md:w-96 p-8 bg-white rounded-3xl shadow-lg">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img src={assets.loggo} alt="Logo" className="w-16 mb-2" />
            <h2 className="text-2xl font-semibold text-gray-700">Create Your Account</h2>
          </div>

          {/* Register Form */}
          <form className="space-y-4" onSubmit={handleRegister}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div className="relative">
                <FaUser className="absolute left-5 top-4 text-gray-500 text-lg" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="First Name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <FaUser className="absolute left-5 top-4 text-gray-500 text-lg" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div className="relative">
              <FaUser className="absolute left-5 top-4 text-gray-500 text-lg" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Username"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-5 top-4 text-gray-500 text-lg" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Email"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-5 top-4 text-gray-500 text-lg" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-5 top-4 text-gray-500 text-lg" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-shadow shadow-md hover:shadow-lg"
            >
              Register
            </button>

            {/* Bottom Links */}
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Already have an account?</span>
              <a href="/login" className="hover:underline text-green-600">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
