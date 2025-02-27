import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [universities, setUniversities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUniversities = async () => {
            const response = await fetch("http://localhost:5001/api/universities");
            const data = await response.json();
            setUniversities(data);
        };

        fetchUniversities();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Admin Dashboard</h2>

                <div className="flex justify-start space-x-4 mb-6">
                    <button
                        onClick={() => navigate("/admin/add-university")}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 focus:outline-none transition duration-300"
                    >
                        Add University
                    </button>
                    <button
                        onClick={() => navigate("/admin/add-courses")}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
                    >
                        Add Courses
                    </button>
                    <button
                        onClick={() => navigate("/admin/add-consultancies")}
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none transition duration-300"
                    >
                        Add Consultancies
                    </button>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Location</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {universities.map((uni) => (
                                <tr key={uni._id} className="border-b hover:bg-gray-50 transition duration-300">
                                    <td className="p-4 text-sm text-gray-800">{uni.name}</td>
                                    <td className="p-4 text-sm text-gray-600">{uni.location}</td>
                                    <td className="p-4">
                                        <button
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600 focus:outline-none transition duration-200"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none transition duration-200"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;