import { FaChartBar, FaSearch, FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { assets } from "../assets/assets";
import NewAdditions from '../compontents/NewAdditions';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-200 relative flex flex-col items-center">
            <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-10"></div>
            <img 
                src={assets.backgroundImage} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                style={{ objectPosition: 'center' }} 
            />

            {/* Hero Section */}
            <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 py-6">
                <div className="container mx-auto px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold text-white">UniFinder</h1>
                    <div className="space-x-6">
                        <Link to="/login" className="text-white text-lg px-6 py-3 hover:bg-gray-300 hover:text-gray-800 rounded-md transition">Login</Link>
                        <Link to="/register" className="bg-white text-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-300 transition">Get Started</Link>
                    </div>
                </div>
            </header>

            <main className="relative z-10 text-center mt-32 flex items-center justify-center w-full h-screen">
                <div className="flex flex-col items-center justify-center px-6 sm:px-12 py-12 sm:py-20 text-center">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6">
                        Find Your Perfect University
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl">
                        Connect with top universities and expert consultancies to make your educational journey a success.
                    </p>
                    <Link to="/smart-search" className="bg-gray-600 text-white px-8 py-4 rounded-lg text-xl sm:text-2xl hover:bg-gray-700 transition">
                        Start Your Journey
                    </Link>
                </div>
            </main>

            {/* Why Choose UniFinder Section */}
            <div className="bg-gray-100 py-12 w-full mt-20">
                <h2 className="text-center text-xl sm:text-2xl font-extrabold text-gray-800 mb-6">
                    Why Choose UniFinder?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                    {/* Smart Search */}
                    <Link 
                        to="/smart-search"
                        className="group block bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition transform hover:-translate-y-1"
                    >
                        <div className="mb-6 text-gray-500 flex justify-center group-hover:text-gray-800 transition">
                            <FaSearch size={56} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Smart Search</h3>
                        <p className="text-gray-600">Find universities that match your preferences using our advanced filters.</p>
                    </Link>
                    
                    {/* Top Universities */}
                    <Link 
                        to="/top-universities"
                        className="group block bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition transform hover:-translate-y-1"
                    >
                        <div className="mb-6 text-gray-500 flex justify-center group-hover:text-gray-800 transition">
                            <FaUniversity size={56} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Top Universities</h3>
                        <p className="text-gray-600">Access detailed information about leading institutions worldwide.</p>
                    </Link>

                    {/* Comprehensive Insights */}
                    <Link 
                        to="/comprehensive-insights"
                        className="group block bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition transform hover:-translate-y-1"
                    >
                        <div className="mb-6 text-gray-500 flex justify-center group-hover:text-gray-800 transition">
                            <FaChartBar size={56} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Comprehensive Insights</h3>
                        <p className="text-gray-600">Get rankings, reviews, and admission criteria to make informed decisions.</p>
                    </Link>
                </div>
            </div>

            {/* New Additions Section */}
            <NewAdditions />

            {/* Frequently Asked Questions Section */}
            <section className="bg-gray-100 w-full py-20 flex flex-col items-center">
                <div className="max-w-5xl w-full px-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-8">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">
                                How does UniFinder help students?
                            </h3>
                            <p className="text-gray-600 mt-2">
                                UniFinder simplifies the university search process by providing detailed information about institutions, connecting you with consultants, and offering application support.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">
                                What types of universities are listed?
                            </h3>
                            <p className="text-gray-600 mt-2">
                                We list both public and private universities across different locations, with comprehensive information about fees, programs, and admission requirements.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Is UniFinder free to use?
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Yes! UniFinder is free for students to explore and compare universities. Additional premium services, such as personalized consultations, may be available at a cost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
