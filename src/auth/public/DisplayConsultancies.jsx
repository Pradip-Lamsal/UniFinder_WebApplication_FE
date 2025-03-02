import axios from "axios";
import { useEffect, useState } from "react";

const DisplayConsultancies = () => {
  const [consultancies, setConsultancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsultancies = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/consultancies");
        setConsultancies(response.data);
      } catch {
        setError("Failed to fetch consultancies.");
      } finally {
        setLoading(false);
      }
    };
    fetchConsultancies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4 sm:px-6 lg:px-8"> {/* Added top padding */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Our Trusted Consultancies
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading consultancies...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {consultancies.map((consultancy) => (
            <div
              key={consultancy._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-8 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {consultancy.name}
              </h3>
              <p className="text-gray-600 mb-2">{consultancy.description}</p>
              <p className="text-gray-700 font-medium mb-2">{consultancy.location}</p>
              <p className="text-gray-500 mb-2"><strong>Services:</strong> {consultancy.services.join(", ")}</p>
              <p className="text-gray-500 mb-2"><strong>Contact:</strong> {consultancy.contact}</p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={`tel:${consultancy.contact}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Call Now
                </a>
                <a
                  href={consultancy.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayConsultancies;