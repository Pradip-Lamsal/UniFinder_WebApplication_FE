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
    <div>
      <h2>Consultancies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {consultancies.map((consultancy) => (
            <div key={consultancy._id}>
              <h3>{consultancy.name}</h3>
              <p>{consultancy.location}</p>
              <p>{consultancy.services.join(", ")}</p>
              <a href={consultancy.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayConsultancies;
