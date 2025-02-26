import { FaEnvelope, FaLock, FaUser } from "react-icons/fa"; // Icons for inputs
import { assets } from "../assets/assets";

const Register = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Fullscreen Background Image - Scaled Up by 50% */}
      <img
        src={assets.background}
        alt="Register Background"
        className="absolute inset-0 w-full h-full object-cover scale-150"
      />

      {/* Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* UniFinder Text at the Top Left */}
      <div className="absolute top-8 left-8 text-3xl font-bold text-gray-600 z-10">
        UniFinder
      </div>

      {/* Logo at the Top - Increased Size */}
      <img
        src={assets.loggo} // Ensure this path is correct
        alt="Logo"
        className="relative z-10 w-20 mb-8"
      />

      {/* Centered Register Form */}
      <form className="relative z-4 w-96 flex flex-col items-center space-y-6">
        {/* First Name Input */}
        <div className="relative w-full">
          <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input
            type="text"
            className="w-full px-14 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white shadow-md"
            placeholder="First Name"
          />
        </div>

        {/* Last Name Input */}
        <div className="relative w-full">
          <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input
            type="text"
            className="w-full px-14 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white shadow-md"
            placeholder="Last Name"
          />
        </div>

        {/* Username Input */}
        <div className="relative w-full">
          <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input
            type="text"
            className="w-full px-14 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white shadow-md"
            placeholder="Username"
          />
        </div>

        {/* Email Input */}
        <div className="relative w-full">
          <FaEnvelope className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input
            type="email"
            className="w-full px-14 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white shadow-md"
            placeholder="Email"
          />
        </div>

        {/* Password Input */}
        <div className="relative w-full">
          <FaLock className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input
            type="password"
            className="w-full px-14 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white shadow-md"
            placeholder="Password"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="relative w-full">
          <FaLock className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input
            type="password"
            className="w-full px-14 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white shadow-md"
            placeholder="Confirm Password"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded-full hover:bg-black transition text-lg font-semibold shadow-lg"
        >
          Register
        </button>

        {/* Bottom Links */}
        <div className="flex justify-between w-full px-4 text-black text-sm">
           <a className="text whitespace-normal">Already have an account? </a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
