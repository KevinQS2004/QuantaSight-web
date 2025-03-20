import React from 'react';

const MissionVision = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg mb-6">
                            At QuantaSight, our mission is to empower scientific teams with AI-driven tools that dramatically accelerate research, development, and market surveillance processes. We aim to transform weeks of work into minutes, allowing brilliant minds to focus on innovation rather than routine tasks.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg mb-6">
                            We envision a future where AI and human expertise work seamlessly together to advance healthcare and life sciences. QuantaSight strives to be at the forefront of this revolution, creating intelligent solutions that enhance human capabilities and accelerate scientific progress.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;