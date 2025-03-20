import React from 'react';
import { ChevronRight } from 'lucide-react';

const AtlasDashboard = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Comprehensive Dashboard</h2>
                        <p className="text-lg mb-6">
                            Our intuitive dashboard provides a central hub for monitoring all pharmacovigilance activities. Track signal trends, manage case assessments, and generate regulatory reports with ease.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Trend Visualization</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Interactive charts and graphs displaying safety signal trends over time</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Case Management</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Streamlined workflow for reviewing and assessing individual safety cases</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Regulatory Reporting</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Automated generation of reports for regulatory submissions</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Risk Mitigation Planning</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Tools for developing and tracking risk management strategies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Atlas Dashboard"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtlasDashboard;