import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [consultancies, setConsultancies] = useState([]);
    const [editConsultancyId, setEditConsultancyId] = useState(null);
    const [formData, setFormData] = useState({ name: "", description: "", location: "", services: "", contact: "" });
    const navigate = useNavigate();

    // Fetch all consultancies from backend
    useEffect(() => {
        const fetchConsultancies = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/consultancies");
                setConsultancies(response.data);
            } catch (err) {
                console.error("Failed to fetch consultancies", err);
            }
        };
        fetchConsultancies();
    }, []);

    // Handle Edit Click
    const handleEditClick = (consultancy) => {
        setEditConsultancyId(consultancy._id);
        setFormData({
            name: consultancy.name,
            description: consultancy.description,
            location: consultancy.location,
            services: consultancy.services.join(", "),
            contact: consultancy.contact
        });
    };

    // Handle Update Consultancy
    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5001/api/consultancies/${editConsultancyId}`, { ...formData, services: formData.services.split(", ") });
            setEditConsultancyId(null);
            window.location.reload(); // Refresh to show updated data
        } catch (err) {
            console.error("Error updating consultancy", err);
        }
    };

    // Handle Delete Consultancy
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/consultancies/${id}`);
            setConsultancies(consultancies.filter(consultancy => consultancy._id !== id)); // Update UI
        } catch (err) {
            console.error("Error deleting consultancy", err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Admin Dashboard</h2>
                <div className="flex justify-start space-x-4 mb-6">
                    <button onClick={() => navigate("/admin/add-university")} className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Add University</button>
                    <button onClick={() => navigate("/admin/add-courses")} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Add Courses</button>
                    <button onClick={() => navigate("/admin/add-consultancies")} className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition">Add Consultancies</button>
                    <button onClick={() => navigate("/admin/view-courses")} className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">View Courses</button>
                    <button onClick={() => navigate("/admin/dashboard")} className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">View University</button>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Location</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Contact</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consultancies.map((consultancy) => (
                                <tr key={consultancy._id} className="border-b hover:bg-gray-50 transition">
                                    <td className="p-4">{consultancy.name}</td>
                                    <td className="p-4">{consultancy.location}</td>
                                    <td className="p-4">{consultancy.contact}</td>
                                    <td className="p-4">
                                        <button onClick={() => handleEditClick(consultancy)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600 transition">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(consultancy._id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {editConsultancyId && (
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Consultancy</h3>
                        <input 
                            type="text" 
                            value={formData.name} 
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                            className="block w-full p-2 border rounded mb-2" 
                            placeholder="Consultancy Name"
                        />
                        <textarea 
                            value={formData.description} 
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
                            className="block w-full p-2 border rounded mb-2" 
                            placeholder="Description"
                        />
                        <input 
                            type="text" 
                            value={formData.location} 
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })} 
                            className="block w-full p-2 border rounded mb-2" 
                            placeholder="Location"
                        />
                        <input 
                            type="text" 
                            value={formData.services} 
                            onChange={(e) => setFormData({ ...formData, services: e.target.value })} 
                            className="block w-full p-2 border rounded mb-2" 
                            placeholder="Services (comma separated)"
                        />
                        <input 
                            type="text" 
                            value={formData.contact} 
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })} 
                            className="block w-full p-2 border rounded mb-2" 
                            placeholder="Contact"
                        />
                        <button onClick={handleUpdate} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
