import React from 'react';
import { Shield } from 'lucide-react';

const ISO = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <Shield className={`w-32 h-32 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className={`text-3xl font-bold mb-4 ${
                            darkMode ? 'text-white' : 'text-gray-800'
                        }`}>ISO Certified</h2>
                        <p className={`text-lg mb-6 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            QuantaSight adheres to the highest standards of quality and security. Our ISO 27001 certification ensures that your sensitive data is protected with enterprise-grade security protocols. Additionally, our ISO 13485 certification demonstrates our commitment to maintaining quality management systems specific to medical device software.
                        </p>
                        <div className="flex space-x-4">
                            <div className={`p-4 rounded-lg shadow-md ${
                                darkMode ? 'bg-gray-700' : 'bg-gray-50'
                            }`}>
                                <div className={`font-bold ${
                                    darkMode ? 'text-white' : 'text-gray-800'
                                }`}>ISO 27001</div>
                                <div className={`text-sm ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>Information Security</div>
                            </div>
                            <div className={`p-4 rounded-lg shadow-md ${
                                darkMode ? 'bg-gray-700' : 'bg-gray-50'
                            }`}>
                                <div className={`font-bold ${
                                    darkMode ? 'text-white' : 'text-gray-800'
                                }`}>ISO 13485</div>
                                <div className={`text-sm ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>Medical Devices</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ISO;