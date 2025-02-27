import { FaChartBar, FaSearch, FaUniversity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";
import Footer from '../compontents/Footer';
import FeaturedUniversities from '../compontents/UniCard';

const LandingPage = () => {
    const navigate = useNavigate(); // Hook to navigate between pages

    return (
        <div className="min-h-screen bg-gray-200 relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-10"></div>
            <img 
                src={assets.backgroundImage} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                style={{ objectPosition: 'center' }} 
            />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-gray-200/80 backdrop-blur-sm z-50 border-b py-8">
                <div className="container mx-auto px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold text-gray-800">UniFinder</h1>
                    <div className="space-x-6">
                        <a href="/login" className="text-gray-700 text-lg px-6 py-3 hover:bg-gray-300 rounded-md">Login</a>
                        <a href="/register" className="bg-gray-500 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-600">Get Started</a>
                    </div>
                </div>
            </header>

            <main className="relative z-10 text-center mt-32 flex items-center justify-center w-full h-screen">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center px-6 sm:px-12 py-12 sm:py-20 text-center">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6">Find Your Perfect University</h1>
                    <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl">
                        Connect with top universities and expert consultancies to make your educational journey a success.
                    </p>
                    <button className="bg-gray-500 text-white px-8 py-4 rounded-lg text-xl sm:text-2xl">
                        Start Your Journey
                    </button>
                </div>
            </main>

            {/* Why Choose UniFinder Section */}
            <div className="bg-gray-100 py-12 w-full mt-20">
                <h2 className="text-center text-xl sm:text-2xl font-extrabold text-gray-800 mb-6">
                    Why Choose UniFinder?
                </h2>
                <div className="flex justify-between items-center gap-8 sm:gap-12">
                    {/* Smart Search */}
                    <div 
                        className="bg-white p-8 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition"
                        onClick={() => navigate("/smart-search")}
                    >
                        <div className="mb-6 text-gray-500 flex justify-center">
                            <FaSearch size={56} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Smart Search</h3>
                        <p className="text-gray-600">Find universities that match your preferences using our advanced filters.</p>
                    </div>
                    
                    {/* Top Universities */}
                    <div 
                        className="bg-white p-8 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition"
                        onClick={() => navigate("/top-universities")}
                    >
                        <div className="mb-6 text-gray-500 flex justify-center">
                            <FaUniversity size={56} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Top Universities</h3>
                        <p className="text-gray-600">Access detailed information about leading institutions worldwide.</p>
                    </div>
                    
                    {/* Comprehensive Insights */}
                    <div 
                        className="bg-white p-8 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition"
                        onClick={() => navigate("/comprehensive-insights")}
                    >
                        <div className="mb-6 text-gray-500 flex justify-center">
                            <FaChartBar size={56} />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">Comprehensive Insights</h3>
                        <p className="text-gray-600">Get rankings, reviews, and admission criteria to make informed decisions.</p>
                    </div>
                </div>
            </div>

            {/* Featured Universities Section */}
            <FeaturedUniversities />

            {/* Frequently Asked Questions Section */}
            <section className="bg-gray-100 w-full py-20 flex flex-col items-center">
                <div className="max-w-5xl w-full px-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-8">
                        Frequently Asked Questions
                    </h2>

                    {/* FAQ Items */}
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

            <Footer/>
        </div>
    );
};

export default LandingPage;
