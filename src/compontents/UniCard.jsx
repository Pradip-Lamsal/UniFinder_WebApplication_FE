import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const UniCard = ({ university }) => {
    return (
        <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
            {/* University Image */}
            <img 
                src={assets.uni1} 
                alt={university.name} 
                className="w-full h-40 object-cover rounded-md"
            />

            {/* University Details */}
            <h3 className="text-lg font-semibold mt-4">{university.name}</h3>
            <p className="text-gray-600">📍 {university.location}</p>
            <p className="text-gray-600">💰 {university.fee}</p>
            <p className="text-gray-700 mt-3">{university.description}</p>

            {/* View Details Link */}
            <Link 
                to={`/university/${university.id}`} 
                className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition text-center"
            >
                View Details
            </Link>

            {/* University Type Badge */}
            <span
                className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${
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
        img: PropTypes.string.isRequired,
    }).isRequired,
};

export default UniCard;
