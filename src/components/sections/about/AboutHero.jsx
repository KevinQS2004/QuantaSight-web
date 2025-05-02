import React from 'react';

const AboutHero = ({ darkMode }) => {
    return (
        <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>About QuantaSight</h1>
                    <p className={`text-lg md:text-xl mb-8 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        A cutting-edge machine intelligence company, developing next-generation natural language solutions for scientific teams in the pharmaceutical and life sciences industries
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;