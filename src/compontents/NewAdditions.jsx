import { useEffect, useState } from 'react';
import UniCard from './UniCard';

const NewAdditions = () => {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5001/api/universities")  // Adjust the URL if needed
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch universities.");
                }
                return response.json();
            })
            .then(data => {
                setUniversities(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <section className="bg-gray-100 w-full py-20 flex flex-col items-center">
            <div className="max-w-7xl w-full px-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-8">
                    New Additions
                </h2>

                {/* Handle Loading & Errors */}
                {loading && <p className="text-gray-600">Loading universities...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {/* Display University Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {universities.length > 0 ? (
                        universities.map((uni) => (
                            <UniCard key={uni.id} university={uni} />
                        ))
                    ) : (
                        !loading && <p className="text-gray-600">No universities available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewAdditions;
