import { useParams } from 'react-router-dom';
import universityImg from '../../assets/university.png'; // Correct import path

const UniversityDetails = () => {
    const { id } = useParams();

    // Sample Data (Replace with API later)
    const university = {
        id,
        name: "Tech University",
        ranking: "#15 in Technology",
        location: "San Francisco, CA",
        tuition: "$25,000 per year",
        description: "A leading institution in technology education, offering world-class research and innovation opportunities.",
        img: universityImg, // Use imported image
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 pt-24 py-10 px-4"> {/* Added top padding */}
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Cover Image */}
                <img src={university.img} alt={university.name} className="w-full h-64 object-cover" />
                
                {/* Content */}
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800">{university.name}</h1>
                    <p className="text-lg text-gray-600 mt-2">{university.ranking}</p>
                    <p className="text-gray-700 mt-4">{university.description}</p>
                    
                    {/* Key Details */}
                    <div className="mt-6 space-y-2">
                        <p><strong>📍 Location:</strong> {university.location}</p>
                        <p><strong>💰 Tuition:</strong> {university.tuition}</p>
                        <p><strong>🔗 Website:</strong> <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit</a></p>
                    </div>

                    {/* Apply Button */}
                    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UniversityDetails;
