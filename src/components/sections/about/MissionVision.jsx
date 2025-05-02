import React from 'react';

const MissionVision = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className={`p-8 rounded-xl shadow-md ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                        <h2 className={`text-3xl font-bold mb-4 ${
                            darkMode ? 'text-white' : 'text-gray-800'
                        }`}>Our Mission</h2>
                        <p className={`text-lg ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            At QuantaSight, our mission is to empower scientific teams with AI-driven tools that dramatically accelerate research, development, and market surveillance processes. We aim to transform weeks of work into minutes, allowing brilliant minds to focus on innovation rather than routine tasks.
                        </p>
                    </div>
                    <div className={`p-8 rounded-xl shadow-md ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                        <h2 className={`text-3xl font-bold mb-4 ${
                            darkMode ? 'text-white' : 'text-gray-800'
                        }`}>Our Vision</h2>
                        <p className={`text-lg ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            We envision a future where AI and human expertise work seamlessly together to advance healthcare and life sciences. QuantaSight strives to be at the forefront of this revolution, creating intelligent solutions that enhance human capabilities and accelerate scientific progress.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;