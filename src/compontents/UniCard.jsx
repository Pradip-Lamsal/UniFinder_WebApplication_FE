const FeaturedUniversities = () => {
    const universities = [
        {
            name: "Tech University",
            location: "San Francisco, CA",
            fee: "$25,000",
            description: "A leading institution in technology education.",
            type: "Public",
        },
        {
            name: "Business School",
            location: "New York, NY",
            fee: "$35,000",
            description: "Premier business education and research.",
            type: "Private",
        },
        {
            name: "Arts Academy",
            location: "Los Angeles, CA",
            fee: "$28,000",
            description: "Creative arts and design excellence.",
            type: "Private",
        },
    ];

    return (
        <section className="bg-blue-100 w-full py-20 flex flex-col items-center justify-center">
            <div className="max-w-7xl w-full px-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-8">
                    Featured Universities
                </h2>

                {/* Horizontal Scrollable Row */}
                <div className="flex flex-row gap-10 overflow-x-auto px-4 py-4 scrollbar-hide">
                    {universities.map((university, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 w-96 flex-shrink-0 rounded-lg shadow-lg text-center transition-all hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {university.name}
                            </h3>
                            <p className="text-gray-600 mt-3 flex items-center">
                                📍 {university.location}
                            </p>
                            <p className="text-gray-600 flex items-center mt-1">
                                💰 Annual Fee: {university.fee}
                            </p>
                            <p className="text-gray-700 mt-3">{university.description}</p>
                            <a
                                href="#"
                                className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline"
                            >
                                View Details →
                            </a>
                            <span
                                className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${
                                    university.type === "Public"
                                        ? "bg-blue-200 text-blue-800"
                                        : "bg-gray-700 text-white"
                                }`}
                            >
                                {university.type}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-white px-6 py-3 rounded-lg shadow-md text-gray-800 font-medium hover:bg-gray-200 transition">
                        View All Universities →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedUniversities;
