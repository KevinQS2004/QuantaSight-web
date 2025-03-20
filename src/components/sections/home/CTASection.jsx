import React from 'react';
import { BriefcaseMedical } from 'lucide-react';
import { PrimaryButton } from '../../common/Button';

const CTASection = ({ darkMode, setActiveSection }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-2/3 mb-8 md:mb-0">
                                <h2 className="text-3xl font-bold mb-4">Ready to transform your research workflow?</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                    Schedule a demo today to see the QuantaSight platform in action and discover how our AI solutions can supercharge your team's productivity.
                                </p>
                                <PrimaryButton onClick={() => setActiveSection('demo')}>
                                    Request a Demo
                                </PrimaryButton>
                            </div>
                            <div className="md:w-1/3 flex justify-center">
                                <BriefcaseMedical className="w-32 h-32 text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;