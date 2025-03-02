import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setIsScrolled(window.scrollY > 50);
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (location.pathname === "/" || location.pathname === "/register") {
        return null;
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/landing-page" className="flex items-center text-lg font-semibold text-blue-600">
                    <img src={assets.loggo} alt="UniFinder Logo" className="w-10 h-10 mr-2" /> {/* Add logo here */}
                    UniFinder
                </Link>

                <div className="hidden md:flex space-x-6 text-sm text-gray-800">
                    <Link to="/landing-page" className="hover:text-blue-600">Home</Link>
                    <Link to="/smart-search" className="hover:text-blue-600">Smart Search</Link>
                    <Link to="/top-universities" className="hover:text-blue-600">Top Universities</Link>
                </div>
                <div className="hidden md:flex">
                    <Link to="/" className="text-blue-600 px-4 py-2 border rounded-md hover:bg-blue-100">Logout</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
