import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FetchAllUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/universities");
        setUniversities(response.data);
      } catch {
        setError("Failed to fetch universities.");
      } finally {
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-6 sm:px-12 lg:px-16"> {/* Added top padding */}
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-14">
        Explore Universities
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading universities...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {universities.map((university) => (
            <div
              key={university._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-8 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {university.name}
              </h3>
              <p className="text-gray-700 font-medium mb-2">{university.location}</p>
              <p className="text-gray-500 mb-2"><strong>Tuition:</strong> {university.tuition}</p>
              <p className="text-gray-500 mb-2"><strong>Description:</strong> {university.description}</p>
              <button 
                onClick={() => navigate(`/university/${university._id}`)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchAllUniversities;
