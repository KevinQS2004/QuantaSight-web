import React from 'react';

const DemoHero = ({ darkMode }) => {
    return (
        <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience QuantaSight in Action</h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                            Schedule a personalized demonstration to see how our platform can transform your workflow
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoHero;