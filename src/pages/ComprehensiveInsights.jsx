const ComprehensiveInsights = () => {
    const insights = [
      {
        name: "Harvard University",
        tuition: "$50,000",
        location: "USA",
        ranking: 1,
        acceptanceRate: "5%",
      },
      {
        name: "Oxford University",
        tuition: "$45,000",
        location: "UK",
        ranking: 2,
        acceptanceRate: "17%",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Comprehensive Insights</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {insights.map((uni, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-gray-800">{uni.name}</h2>
              <p className="text-gray-600">Location: {uni.location}</p>
              <p className="text-gray-600">Tuition: {uni.tuition}</p>
              <p className="text-gray-600">Acceptance Rate: {uni.acceptanceRate}</p>
              <p className="text-gray-700 font-semibold">Ranking: #{uni.ranking}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ComprehensiveInsights;
  