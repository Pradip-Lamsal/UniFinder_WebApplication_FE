import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [editCourseId, setEditCourseId] = useState(null);
    const [formData, setFormData] = useState({ courseType: "", courseDuration: "", courseCategory: "", timePeriod: "" });
    const navigate = useNavigate();

    // Fetch all courses from backend
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/courses");
                setCourses(response.data);
            } catch (err) {
                console.error("Failed to fetch courses", err);
            }
        };
        fetchCourses();
    }, []);

    // Handle Edit Click
    const handleEditClick = (course) => {
        setEditCourseId(course._id);
        setFormData({
            courseType: course.courseType,
            courseDuration: course.courseDuration,
            courseCategory: course.courseCategory,
            timePeriod: course.timePeriod
        });
    };

    // Handle Update Course
    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5001/api/courses/${editCourseId}`, formData);
            setEditCourseId(null);
            window.location.reload(); // Refresh to show updated data
        } catch (err) {
            console.error("Error updating course", err);
        }
    };

    // Handle Delete Course
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/courses/${id}`);
            setCourses(courses.filter(course => course._id !== id)); // Update UI
        } catch (err) {
            console.error("Error deleting course", err);
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
                    <button onClick={() => navigate("/admin/view-consultancies")} className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">View Consultancies</button>
                    <button onClick={() => navigate("/admin/dashboard")} className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">View University</button>
                </div>

                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Course Type</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Duration</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Category</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course._id} className="border-b hover:bg-gray-50 transition">
                                    <td className="p-4">{course.courseType}</td>
                                    <td className="p-4">{course.courseDuration}</td>
                                    <td className="p-4">{course.courseCategory}</td>
                                    <td className="p-4">
                                        <button onClick={() => handleEditClick(course)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600 transition">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(course._id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {editCourseId && (
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Course</h3>
                        <input type="text" value={formData.courseType} onChange={(e) => setFormData({ ...formData, courseType: e.target.value })} className="block w-full p-2 border rounded mb-2" />
                        <input type="text" value={formData.courseDuration} onChange={(e) => setFormData({ ...formData, courseDuration: e.target.value })} className="block w-full p-2 border rounded mb-2" />
                        <input type="text" value={formData.courseCategory} onChange={(e) => setFormData({ ...formData, courseCategory: e.target.value })} className="block w-full p-2 border rounded mb-2" />
                        <input type="text" value={formData.timePeriod} onChange={(e) => setFormData({ ...formData, timePeriod: e.target.value })} className="block w-full p-2 border rounded mb-2" />
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
