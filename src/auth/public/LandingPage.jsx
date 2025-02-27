import { useRef } from "react";
import { FaChartBar, FaSearch, FaUniversity } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const LandingPage = () => {
    const faqSectionRef = useRef(null);

    const handleScroll = () => {
        faqSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-white flex flex-col items-center">

            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-10"></div>
            <img 
                src={assets.backgroundImage} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                style={{ objectPosition: 'center' }} 
            />

            {/* Hero Section */}
            <main className="relative z-10 text-center mt-32 flex items-center justify-center w-full h-screen px-6 sm:px-12 py-12 sm:py-20 text-center">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6 transition-all transform hover:scale-105">
                        Find Your Perfect University
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl transition-all transform hover:scale-105">
                        Connect with top universities and expert consultancies to make your educational journey a success.
                    </p>
                    <button 
                        onClick={handleScroll} 
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl sm:text-2xl hover:bg-blue-700 transition"
                    >
                        Start Your Journey
                    </button>
                </div>
            </main>

            {/* Why Choose UniFinder Section */}
            <div className="bg-gray-100 py-12 w-full mt-20">
                <h2 className="text-center text-xl sm:text-2xl font-extrabold text-gray-800 mb-6">
                    Why Choose UniFinder?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
                    {/* Smart Search */}
                    <Link 
                        to="/smart-search"
                        className="group block bg-white p-8 rounded-lg shadow-xl text-center hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105"
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
                        className="group block bg-white p-8 rounded-lg shadow-xl text-center hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105"
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
                        className="group block bg-white p-8 rounded-lg shadow-xl text-center hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105"
                    >
                        <div className="mb-6 text-gray-500 flex justify-center group-hover:text-gray-800 transition">
                            <FaChartBar size={56} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Comprehensive Insights</h3>
                        <p className="text-gray-600">Get rankings, reviews, and admission criteria to make informed decisions.</p>
                    </Link>
                </div>
            </div>

            {/* Frequently Asked Questions Section */}
            <section ref={faqSectionRef} className="bg-gray-100 w-full py-20 flex flex-col items-center">
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
