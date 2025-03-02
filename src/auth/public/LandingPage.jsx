import axios from "axios";
import { useEffect, useState } from "react";
import {
    FaBookReader,
    FaFilter,
    FaSearch,
    FaUniversity,
    FaWarehouse
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavbarWrapper from "../../compontents/Navbar";
import UniCard from "../../compontents/UniCard";

const LandingPage = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/universities"
        );
        setUniversities(response.data);
        setFilteredUniversities(response.data);
        setLoading(false);
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to fetch universities.");
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

//   const handleSearch = () => {
//     if (!searchQuery) {
//       setFilteredUniversities(universities);
//       return;
//     }
//     const filtered = universities.filter((uni) =>
//       uni.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredUniversities(filtered);
//   };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-black">
      <NavbarWrapper />
      <div className="pt-32 px-6 sm:px-12">
        {/* Hero Section */}
        <header className="text-center py-16">
          <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
            Find Your <span className="text-blue-600">Perfect University</span>{" "}
            Abroad
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Explore global education opportunities tailored to your aspirations
            with real-time updates and expert insights.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="relative w-full max-w-3xl bg-white shadow-md rounded-full p-4 flex items-center">
              <FaSearch className="text-gray-500 ml-4" />
              <input
                type="text"
                placeholder="Search for universities..."
                className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => navigate("/smart-search")} 
                className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition flex items-center"
              >
                <FaFilter className="mr-2" /> Go TO Search
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
          <button
              className="border px-6 py-4 rounded-lg flex items-center bg-gray-100 hover:bg-gray-200 shadow-md text-lg"
              onClick={() => navigate("/display-courses")} // Redirect on click
            >
              <FaBookReader className="mr-2" /> Courses
            </button>
            <button
              className="border px-6 py-4 rounded-lg flex items-center bg-gray-100 hover:bg-gray-200 shadow-md text-lg"
              onClick={() => navigate("/fetch-all-universities")} // Redirect on click
            >
              <FaUniversity className="mr-2" /> University
            </button>
            <button
              className="border px-6 py-4 rounded-lg flex items-center bg-gray-100 hover:bg-gray-200 shadow-md text-lg"
              onClick={() => navigate("/display-consultancies")} // Redirect on click
            >
              <FaWarehouse className="mr-2" /> Consultancy
            </button>
          </div>
        </header>

        {/* Featured Universities */}
        <section className="px-8 py-16">
          <h2 className="text-5xl font-bold text-center text-gray-800">
            New Additions
          </h2>
          <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 mx-auto mt-10">
            {loading && (
              <p className="text-gray-600 text-center text-lg">
                Loading universities...
              </p>
            )}
            {error && (
              <p className="text-red-500 text-center text-lg">{error}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredUniversities.length > 0
                ? filteredUniversities.map((uni) => (
                    <UniCard key={uni._id} university={uni} />
                  ))
                : !loading && (
                    <p className="text-gray-600 text-center">
                      No universities found.
                    </p>
                  )}
            </div>
          </div>
        </section>

        {/* College Ranking */}
        <section className="px-8 py-16">
          <h2 className="text-5xl font-bold text-center text-gray-800">
            College Ranking 2024
          </h2>
          <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg p-8 mx-auto mt-10">
            {loading && (
              <p className="text-gray-600 text-center text-lg">
                Loading universities...
              </p>
            )}
            {error && (
              <p className="text-red-500 text-center text-lg">{error}</p>
            )}
            <table className="w-full text-left border-collapse text-lg">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="p-4 text-gray-800">Ranking</th>
                  <th className="p-4 text-gray-800">University</th>
                  <th className="p-4 text-gray-800">Locaton</th>
                </tr>
              </thead>
              <tbody>
                {universities.length > 0
                  ? universities.map((uni) => (
                      <tr
                        key={uni._id}
                        className="border-b hover:bg-gray-200 transition"
                      >
                        <td className="p-4 font-semibold">{uni.ranking}</td>
                        <td className="p-4 font-bold text-gray-900">
                          {uni.name}
                        </td>
                        <td className="p-4 text-gray-700">{uni.location}</td>
                      </tr>
                    ))
                  : !loading && (
                      <tr>
                        <td
                          colSpan="3"
                          className="text-center p-6 text-lg text-gray-600"
                        >
                          No universities available.
                        </td>
                      </tr>
                    )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
