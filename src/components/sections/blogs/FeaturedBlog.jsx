import React from 'react';
import { PrimaryButton } from '../../common/Button';

const FeaturedBlog = ({ darkMode }) => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <img
                                src="/api/placeholder/600/400"
                                alt="AI in Pharmacovigilance"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <div className="text-sm text-blue-600 font-semibold mb-2">FEATURED</div>
                            <h2 className="text-2xl font-bold mb-4">The Evolution of AI in Pharmacovigilance: From Reactive to Proactive Signal Detection</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                How artificial intelligence is transforming the pharmaceutical industry's approach to post-market surveillance and safety monitoring...
                            </p>
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                    <img
                                        src="/api/placeholder/100/100"
                                        alt="Author"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-medium">Dr. Sarah Johnson</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Head of Pharmacovigilance</div>
                                </div>
                            </div>
                            <PrimaryButton onClick={() => {}}>
                                Read More
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBlog;