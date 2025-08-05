import React from 'react';
import { ChevronRight } from 'lucide-react';

const DocumentGeneration = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Multi-Format Content Creation</h2>
                        <p className="text-lg mb-6">
                            Transform research findings into polished, audience-specific documents with just a few clicks. Our AI you can defend in a meeting templates help you create consistent, high-quality content in various formats.

                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Scientific Publications</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Manuscript drafts, poster presentations, and conference abstracts</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Regulatory Documents</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Clinical evaluation reports, safety updates, and submission documents</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Medical Communications</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">HCP educational materials, advisory board briefing documents, and MSL resources</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ChevronRight size={20} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">Market Access Materials</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Value dossiers, payer presentations, and health economic summaries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Document Generation"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocumentGeneration;