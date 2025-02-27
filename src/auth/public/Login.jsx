import axios from "axios";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); 

        try {
            const res = await axios.post("http://localhost:5001/api/auth/login", { username, password }, { withCredentials: true });

            alert(res.data.message);
            // If user is admin, redirect to admin dashboard
            if (res.data.isAdmin) {
                navigate("/admin/dashboard");
            } else {
                // Otherwise, redirect to home
                navigate("/");
            }
        } catch (err) {
            setError(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
            <img src={assets.background} alt="Login Background" className="absolute inset-0 w-full h-full object-cover scale-150" />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="absolute top-8 left-8 text-3xl font-bold text-gray-600 z-10">UniFinder</div>
            <img src={assets.loggo} alt="Logo" className="relative z-10 w-20 mb-10" />

            <form className="relative z-10 w-96 flex flex-col items-center space-y-6" onSubmit={handleLogin}>
                {error && <p className="text-red-500">{error}</p>}
                <div className="relative w-full">
                    <FaUser className="absolute left-5 top-3 text-gray-500 text-lg" />
                    <input type="text" className="w-full px-14 py-3 border rounded-full" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="relative w-full">
                    <FaLock className="absolute left-5 top-3 text-gray-500 text-lg" />
                    <input type="password" className="w-full px-14 py-3 border rounded-full" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="w-full bg-gray-600 text-white py-3 rounded-full hover:bg-black transition">Login</button>
                <div className="flex justify-between w-full px-4 text-gray-700 text-sm">
                    <a>Dont have an account?</a>
                    <a href="/register" className="hover:underline">Create Account</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
