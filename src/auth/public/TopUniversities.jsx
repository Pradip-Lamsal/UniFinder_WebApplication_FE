import axios from "axios";
import { useEffect, useState } from "react";

const TopUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch universities data from backend API
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/universities");
        setUniversities(response.data);
        setLoading(false);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to fetch universities.");
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Top Universities</h1>

      {/* Handle Loading and Errors */}
      {loading && <p className="text-gray-600">Loading universities...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-gray-700">#</th>
              <th className="p-4 text-gray-700">University</th>
              <th className="p-4 text-gray-700">Location</th>
            </tr>
          </thead>
          <tbody>
            {universities.length > 0 ? (
              universities.map((uni) => (
                <tr key={uni._id} className="border-b hover:bg-gray-200 transition">
                  <td className="p-4">{uni.ranking}</td>
                  <td className="p-4 font-semibold">{uni.name}</td>
                  <td className="p-4">{uni.location}</td>
                </tr>
              ))
            ) : (
              !loading && <tr><td colSpan="3" className="text-center p-4">No universities available.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopUniversities;
