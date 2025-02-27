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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Smart Search</h1>

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
          className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
          <FaFilter />
        </button>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((uni, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-gray-800">{uni.name}</h2>
            <p className="text-gray-500">{uni.location}</p>
            <p className="text-gray-700 font-bold">Ranking: #{uni.ranking}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartSearch;
