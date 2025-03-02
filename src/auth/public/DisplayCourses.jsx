import axios from "axios";
import { useEffect, useState } from "react";

const DisplayCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/courses");
        setCourses(response.data);
      } catch {
        setError("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-6 sm:px-12 lg:px-16"> {/* Added top padding */}
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-14">
        Explore Our Courses
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading courses...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-8 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {course.name}
              </h3>
              <p className="text-gray-700 font-medium mb-2">{course.university}</p>
              <p className="text-gray-500 mb-2"><strong>Type:</strong> {course.courseType}</p>
              <p className="text-gray-500 mb-2"><strong>Duration:</strong> {course.courseDuration}</p>
              <p className="text-gray-500 mb-2"><strong>Category:</strong> {course.courseCategory}</p>
              <p className="text-gray-500 mb-2"><strong>Time Period:</strong> {course.timePeriod}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayCourses;
