const Footer = () => {
    return (
        <footer className="bg-blue-100 py-12 w-full">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
                
                {/* UniFinder Branding */}
                <div className="w-full md:w-1/3 text-center md:text-left space-y-4">
                    <h3 className="text-lg font-semibold">UniFinder</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Making university selection and application process easier for students worldwide.
                    </p>
                </div>

                {/* Contact */}
                <div className="w-full md:w-1/3 text-center md:text-right space-y-4">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Have questions? Email us at <br />
                        <a href="mailto:support@unifinder.com" className="text-blue-600 hover:underline">
                            support@unifinder.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-700 text-sm mt-10">
                © 2024 UniFinder. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
