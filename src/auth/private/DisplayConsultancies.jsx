import axios from "axios";
import { useEffect, useState } from "react";

const DisplayConsultancies = () => {
  const [consultancies, setConsultancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultancies = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/consultancies");
        setConsultancies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching consultancies:", error);
        setLoading(false);
      }
    };

    fetchConsultancies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Consultancies
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading consultancies...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {consultancies.map((consultancy) => (
            <div
              key={consultancy._id}
              className="bg-white rounded-lg shadow-xl overflow-hidden p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {consultancy.name}
                </h3>
                <p className="text-gray-600 mb-4">{consultancy.location}</p>
                <p className="text-gray-500 mb-4">
                  <strong>Services Offered:</strong> {consultancy.services.join(", ")}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Contact Info:</strong> {consultancy.contact}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={`tel:${consultancy.contact}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Call Now
                </a>
                <a
                  href={consultancy.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
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
