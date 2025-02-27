const TopUniversities = () => {
    const universities = [
      { name: "Harvard University", location: "USA", ranking: 1 },
      { name: "MIT", location: "USA", ranking: 2 },
      { name: "Stanford University", location: "USA", ranking: 3 },
      { name: "Oxford University", location: "UK", ranking: 4 },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Top Universities</h1>
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-gray-700">#</th>
                <th className="p-4 text-gray-700">University</th>
                <th className="p-4 text-gray-700">Location</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((uni, index) => (
                <tr key={index} className="border-b hover:bg-gray-200 transition">
                  <td className="p-4">{uni.ranking}</td>
                  <td className="p-4 font-semibold">{uni.name}</td>
                  <td className="p-4">{uni.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TopUniversities;
  