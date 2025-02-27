import axios from "axios";
import { useState } from "react";

const AddConsultancy = () => {
  const [newConsultancy, setNewConsultancy] = useState({
    name: "",
    description: "",
    location: "",
    services: "",
    contact: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setNewConsultancy({
      ...newConsultancy,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddConsultancy = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/consultancies", newConsultancy, {
        withCredentials: true,
      });

      setNewConsultancy({
        name: "",
        description: "",
        location: "",
        services: "",
        contact: "",
      });
    } catch (error) {
      setError(error.response?.data?.error || "Failed to add consultancy");
    }
  };

  return (
    <section className="bg-gray-100 w-full py-20 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-8">Add Consultancy</h2>

        {error && <p className="text-red-500">{error}</p>}

        {/* Add Consultancy Form */}
        <form onSubmit={handleAddConsultancy} className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Consultancy</h3>

          <input
            type="text"
            name="name"
            value={newConsultancy.name}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Consultancy Name"
            required
          />

          <textarea
            name="description"
            value={newConsultancy.description}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Description"
            required
          />

          <input
            type="text"
            name="location"
            value={newConsultancy.location}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Location"
            required
          />

          <input
            type="text"
            name="services"
            value={newConsultancy.services}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Services Offered"
            required
          />

          <input
            type="text"
            name="contact"
            value={newConsultancy.contact}
            onChange={handleInputChange}
            className="w-full p-3 mb-4 border rounded-lg"
            placeholder="Contact Information"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add Consultancy
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddConsultancy;
