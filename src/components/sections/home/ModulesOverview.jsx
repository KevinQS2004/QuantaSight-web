import React from 'react';
import { FileText, Database, Users } from 'lucide-react';
import { ModuleCard } from '../../common/Cards';

const ModulesOverview = ({ darkMode, setActiveSection }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Powerful Modules</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Our comprehensive suite of tools designed to revolutionize your workflow
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ModuleCard
                        title="Xtract"
                        description="Scientific Information, Guidelines, Patents, Clinical Trials. Include AI summarisation and evaluation."
                        icon={<FileText className="w-16 h-16 text-blue-600" />}
                        onClick={() => setActiveSection('xtract')}
                    />

                    <ModuleCard
                        title="Atlas"
                        description="Agentic AI to monitor for signals as part of post market surveillance with automatic query capabilities."
                        icon={<Database className="w-16 h-16 text-blue-600" />}
                        onClick={() => setActiveSection('atlas')}
                    />

                    <ModuleCard
                        title="Workroom"
                        description="Area to share and collaborate. Drag and Drop summaries to rapidly create content in multiple formats."
                        icon={<Users className="w-16 h-16 text-blue-600" />}
                        onClick={() => setActiveSection('workroom')}
                    />
                </div>
            </div>
        </section>
    );
};

export default ModulesOverview;