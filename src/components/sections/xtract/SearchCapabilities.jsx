import React from 'react';

const SearchCapabilities = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Advanced Search Capabilities</h2>
                        <p className="text-lg mb-6">
                            Our powerful search engine allows you to find exactly what you need with precision and speed. Use complex Boolean operators, year-based filtering, and exact matching to narrow down results from millions of documents.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <span>Boolean operators (AND, OR, NOT) for precise queries</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <span>Year and date range filtering</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <span>Exact phrase matching with quotation marks</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <span>Field-specific searches (author, title, abstract, etc.)</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                            <div className="font-mono text-sm">
                                <div className="mb-2"># Example Boolean Search</div>
                                <div className="p-2 bg-gray-800 text-green-400 rounded mb-4">
                                    ("immuno-oncology" OR "cancer immunotherapy") AND "PD-1 inhibitor" AND year:[2020 TO 2025]
                                </div>
                                <div className="mb-2"># Author + Subject Search</div>
                                <div className="p-2 bg-gray-800 text-green-400 rounded">
                                    author:"Smith J" AND subject:"diabetes" NOT "type 1"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchCapabilities;