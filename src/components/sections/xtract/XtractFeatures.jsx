import React from 'react';
import { ChevronRight } from 'lucide-react';

const XtractFeatures = ({ darkMode }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Effortless Information Extraction</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        QuantaSight's extraction feature empowers scientists to rapidly gather insights from various sources
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Papers</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>All paper related details with advanced search capabilities</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>AI-powered summarization of complex scientific papers</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Critical evaluation of methodologies and results</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Discovery of similar papers and research trends</span>
                            </li>
                        </ul>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">KOL (Key Opinion Leaders)</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Comprehensive profiles of related authors and researchers</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Publication history and citation analysis</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Institutional affiliations and research networks</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Transparency in payment and collaboration data</span>
                            </li>
                        </ul>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Guidelines & Clinical Trials</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Up-to-date access to treatment guidelines across specialties</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Comprehensive clinical trial information and status</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>AI summaries of complex protocol documents</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Competitive landscape analysis of ongoing trials</span>
                            </li>
                        </ul>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Company Information</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>KOL relationships and collaboration networks</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Drug development pipeline and competitive analysis</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Research focus areas and emerging interests</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span>Strategic partnership and investment activities</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default XtractFeatures;