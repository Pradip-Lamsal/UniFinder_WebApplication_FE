import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { assets } from "../assets/assets";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <img src={assets.background} alt="Register Background" className="absolute inset-0 w-full h-full object-cover scale-150" />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute top-8 left-8 text-3xl font-bold text-gray-600 z-10">UniFinder</div>
      <img src={assets.loggo} alt="Logo" className="relative z-10 w-20 mb-8" />

      <form className="relative z-4 w-96 flex flex-col items-center space-y-6" onSubmit={handleRegister}>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div className="relative w-full">
          <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-14 py-3 border rounded-full" placeholder="First Name" required />
        </div>

        <div className="relative w-full">
          <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-14 py-3 border rounded-full" placeholder="Last Name" required />
        </div>

        <div className="relative w-full">
          <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full px-14 py-3 border rounded-full" placeholder="Username" required />
        </div>

        <div className="relative w-full">
          <FaEnvelope className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-14 py-3 border rounded-full" placeholder="Email" required />
        </div>

        <div className="relative w-full">
          <FaLock className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-14 py-3 border rounded-full" placeholder="Password" required />
        </div>

        <button type="submit" className="w-full bg-gray-600 text-white py-3 rounded-full hover:bg-black transition">Register</button>
      </form>
    </div>
  );
};

export default Register;
