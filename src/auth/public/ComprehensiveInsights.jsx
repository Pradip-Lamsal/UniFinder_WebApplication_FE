import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import UniCard from "../../compontents/UniCard";

const ComprehensiveInsights = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all universities
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/universities");
        setUniversities(response.data);
        setFilteredUniversities(response.data); // Initially, show all universities
        setLoading(false);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError("Failed to fetch universities");
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    if (!searchQuery) {
      setFilteredUniversities(universities); // Reset to all universities when search is empty
      return;
    }

    const filtered = universities.filter((uni) =>
      uni.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUniversities(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Comprehensive Insights</h1>

      {/* Search Bar */}
      <div className="flex w-full max-w-3xl bg-white shadow-md rounded-full p-4 mb-6">
        <FaSearch className="text-gray-500 ml-4 mt-1" />
        <input
          type="text"
          placeholder="Search for universities..."
          className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition"
        >
          <FaFilter />
        </button>
      </div>

      {/* Handle Loading & Errors */}
      {loading && <p className="text-gray-600">Loading universities...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display University Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni) => <UniCard key={uni._id} university={uni} />)
        ) : (
          !loading && <p className="text-gray-600">No universities found.</p>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveInsights;
