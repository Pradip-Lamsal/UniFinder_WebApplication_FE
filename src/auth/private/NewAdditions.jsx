import axios from "axios";
import { useState } from "react";

const NewAdditions = () => {
  const [error, setError] = useState(null);

  const [newUniversity, setNewUniversity] = useState({
    name: "",
    location: "",
    tuition: "",
    description: "",
    // img: "",  // Uncomment if you want to include an image URL field
  });

  const handleInputChange = (e) => {
    setNewUniversity({
      ...newUniversity,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUniversity = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend
      await axios.post("http://localhost:5001/api/universities", newUniversity, {
        withCredentials: true, // Ensure that the token is sent with the request
      });

      // Clear form after submission
      setNewUniversity({
        name: "",
        location: "",
        tuition: "",
        description: "",
        // img: "",
      });

      // Optional: If you want to redirect to the universities list page
      // window.location.href = "/universities";  // Add your route if needed

    } catch (error) {
      setError(error.response?.data?.error || "Failed to add university");
    }
  };

  return (
    <section className="bg-gray-100 w-full py-20 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-8">
          New Additions
        </h2>

        {/* Handle Loading & Errors */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Add New University Form */}
        <form onSubmit={handleAddUniversity} className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New University</h3>

          <input
            type="text"
            name="name"
            value={newUniversity.name}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="University Name"
            required
          />
          <input
            type="text"
            name="location"
            value={newUniversity.location}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Location"
            required
          />
          <input
            type="text"
            name="tuition"
            value={newUniversity.tuition}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Tuition"
            required
          />
          <textarea
            name="description"
            value={newUniversity.description}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Description"
            required
          />
          {/* Uncomment if you want to include an image URL field */}
          {/* <input
            type="text"
            name="img"
            value={newUniversity.img}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Image URL"
            required
          /> */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add University
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewAdditions;
