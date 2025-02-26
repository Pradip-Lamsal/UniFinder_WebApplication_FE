import { FaLock, FaUser } from "react-icons/fa"; // Icons for input fields
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Fullscreen Background Image - Scaled Up by 50% */}
      <img
        src={assets.background}
        alt="Login Background"
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
        className="relative z-10 w-20 mb-10"
      />

      {/* Centered Login Form */}
      <form className="relative z-10 w-96 flex flex-col items-center space-y-6">
        {/* Username Input */}
        <div className="relative w-full">
          <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
          <input
            type="text"
            className="w-full px-14 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-black text-gray-800 bg-white shadow-md"
            placeholder="Username"
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

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded-full hover:bg-black transition text-lg font-semibold shadow-lg"
        >
          Login
        </button>

        {/* Bottom Links */}
        <div className="flex justify-between w-full px-4 text-gray-700 text-sm">
          <a className='bg whitespace-normal'>Dont have an account?</a>
          <a href="/register" className="hover:underline">Create Account</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
