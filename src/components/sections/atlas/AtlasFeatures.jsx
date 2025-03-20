import React from 'react';
import { Database, Brain, MessageSquare } from 'lucide-react';

const AtlasFeatures = ({ darkMode }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Proactive Signal Detection</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Harness the power of AI to continuously monitor and analyze data from multiple sources for early safety signal detection
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <div className="flex justify-center mb-6">
                            <Database className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Automated Monitoring</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Continuously scan scientific literature, social media, regulatory databases, and other sources to identify potential safety signals as they emerge.
                        </p>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <div className="flex justify-center mb-6">
                            <Brain className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">AI-Powered Analysis</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Advanced natural language processing algorithms assess the clinical relevance and potential impact of detected signals, prioritizing those requiring immediate attention.
                        </p>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <div className="flex justify-center mb-6">
                            <MessageSquare className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Real-Time Alerts</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Receive instant notifications about critical safety signals, allowing your team to respond rapidly to emerging issues and minimize potential risks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtlasFeatures;