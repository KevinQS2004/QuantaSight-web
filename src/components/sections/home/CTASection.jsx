import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseMedical } from 'lucide-react';

// Updated PrimaryButton component with Link support
const PrimaryButton = ({ to, children, onClick, fullWidth = false }) => {
    const baseClasses = `px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium ${
        fullWidth ? 'w-full' : ''
    }`;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
};

const CTASection = ({ darkMode }) => {
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
                                <PrimaryButton to="/demo">
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