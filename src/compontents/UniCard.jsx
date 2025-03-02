import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UniCard = ({ university }) => {
    return (
        <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2 border border-gray-200">
            {/* University Details */}
            <h3 className="text-2xl font-bold mt-2 text-gray-900">{university.name}</h3>
            <p className="text-gray-600 mt-1 font-medium">📍 {university.location}</p>
            <p className="text-gray-600 mt-1 font-medium">💰 Tuition: {university.fee}</p>
            <p className="text-gray-700 mt-4 text-sm leading-relaxed">📝 {university.description}</p>

            {/* View Details Link */}
            <Link 
                to={`/university/${university.id}`} 
                className="block mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition text-center font-semibold"
            >
                View Details
            </Link>

            {/* University Type Badge */}
            <span
                className={`absolute top-4 right-4 px-4 py-1 text-sm font-semibold rounded-full shadow-md ${
                    university.type === "Public" ? "bg-blue-200 text-blue-800" : "bg-gray-700 text-white"
                }`}
            >
                {university.type}
            </span>
        </div>
    );
};

// ✅ Add PropTypes for validation
UniCard.propTypes = {
    university: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        fee: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
};

export default UniCard;
