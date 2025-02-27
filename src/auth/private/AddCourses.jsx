import axios from "axios";
import { useState } from "react";

const AddCourses = () => {
  const [error, setError] = useState(null);
  const [newCourse, setNewCourse] = useState({
    courseType: "",
    courseDuration: "",
    courseCategory: "",
    timePeriod: "",
  });

  const handleInputChange = (e) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      // Send course data to the backend
      await axios.post("http://localhost:5001/api/courses", newCourse, {
        withCredentials: true, // Ensure that the token is sent with the request
      });

      // Clear form after submission
      setNewCourse({
        courseType: "",
        courseDuration: "",
        courseCategory: "",
        timePeriod: "",
      });

      // Optional: Redirect after successful addition of course
      // window.location.href = "/courses";  // Redirect to course list page
    } catch (error) {
      setError(error.response?.data?.error || "Failed to add course");
    }
  };

  return (
    <section className="bg-gray-100 w-full py-20 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-8">
          Add New Course
        </h2>

        {/* Handle Loading & Errors */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Add New Course Form */}
        <form
          onSubmit={handleAddCourse}
          className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Add New Course
          </h3>

          <input
            type="text"
            name="courseType"
            value={newCourse.courseType}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Course Type"
            required
          />
          <input
            type="text"
            name="courseDuration"
            value={newCourse.courseDuration}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Course Duration"
            required
          />
          <input
            type="text"
            name="courseCategory"
            value={newCourse.courseCategory}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Course Category (IT, Law, Arts, etc.)"
            required
          />
          <input
            type="text"
            name="timePeriod"
            value={newCourse.timePeriod}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Time Period (Full-time, Part-time)"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add Course
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCourses;
