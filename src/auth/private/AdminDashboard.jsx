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
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
            <button onClick={() => navigate("/admin/add-university")} className="bg-green-600 text-white px-4 py-2 rounded">Add University</button>
            <button onClick={() => navigate("/admin/add-courses")} className="bg-green-600 text-white px-4 py-2 rounded">Add Courses</button>
            <table className="w-full mt-4 border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Name</th>
                        <th className="p-2">Location</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {universities.map((uni) => (
                        <tr key={uni._id} className="border">
                            <td className="p-2">{uni.name}</td>
                            <td className="p-2">{uni.location}</td>
                            <td className="p-2">
                                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                <button className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
