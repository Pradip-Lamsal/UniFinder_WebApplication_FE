import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Hide Navbar on Login & Register pages
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <nav className="absolute top-0 left-0 right-0 bg-opacity-80 bg-gray-800 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300">
          UniFinder
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm text-white">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/smart-search" className="hover:text-gray-300 transition duration-300">Smart Search</Link>
          <Link to="/top-universities" className="hover:text-gray-300 transition duration-300">Top Universities</Link>
        </div>

        {/* Login & Register Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link 
            to="/login" 
            className="text-white px-4 py-2 border border-white rounded-md hover:bg-gray-200/20 transition duration-300"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
