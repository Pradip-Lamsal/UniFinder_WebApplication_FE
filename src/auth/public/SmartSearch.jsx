import { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

const SmartSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([
    { name: "Harvard University", location: "USA", ranking: 1 },
    { name: "Oxford University", location: "UK", ranking: 2 },
    { name: "Stanford University", location: "USA", ranking: 3 },
  ]);

  // Function to handle search
  const handleSearch = () => {
    if (!searchQuery) return; // Do nothing if search input is empty

    const filteredResults = results.filter((uni) =>
      uni.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6 sm:px-12 lg:px-16"> {/* Added spacing */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10">Smart Search</h1>

      {/* Search Bar */}
      <div className="flex w-full max-w-3xl bg-white shadow-lg rounded-full p-4 mb-8 border border-gray-300">
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
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-2"
        >
          <FaFilter />
          <span className="ml-2">Filter</span>
        </button>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {results.map((uni, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg p-6 text-center hover:scale-105 transition transform border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{uni.name}</h2>
            <p className="text-gray-600 mt-1 font-medium">📍 {uni.location}</p>
            <p className="text-gray-800 font-bold mt-2">🏆 Ranking: #{uni.ranking}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartSearch;
