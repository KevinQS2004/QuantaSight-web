import React from 'react';
import { PrimaryButton, SecondaryButton } from '../../common/Button';
import logoImage from "../../../assets/images/img.png";

const Hero = ({ darkMode, setActiveSection }) => {
    return (
        <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Next-Generation AI
                            </span> <br />
                            <span className={darkMode ? 'text-white' : 'text-gray-800'}>
                                for Pharmaceutical & Life Sciences
                            </span>
                        </h1>
                        <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Imagine a world where content assimilation and generation takes minutes, rather than weeks...
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <PrimaryButton onClick={() => setActiveSection('demo')}>
                                Request a Demo
                            </PrimaryButton>
                            <SecondaryButton onClick={() => setActiveSection('about')} darkMode={darkMode}>
                                Learn More
                            </SecondaryButton>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center relative">
                        <div className="relative w-full max-w-lg">
                            {/* Main image with proper styling */}
                            <div className="flex justify-center">
                                <img
                                    src={logoImage}
                                    alt="QuantaSight AI Platform"
                                    className="w-4/5 h-auto object-contain filter drop-shadow-xl"
                                />
                            </div>

                            {/* Powered by tag */}
                            <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                Powered by Hercules AI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;