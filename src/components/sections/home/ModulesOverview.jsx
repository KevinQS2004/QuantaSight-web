import React from 'react';
import { FileText, Database, Users } from 'lucide-react';
import {useTheme} from "../../../context/ThemeContext.jsx";

// Improved ModuleCard component with better light mode styling
const ModuleCard = ({ title, description, icon, onClick }) => {
    const { darkMode } = useTheme();

    return (
        <div
            onClick={onClick}
            className={`p-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 flex flex-col items-center text-center ${
                darkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-800 border border-gray-100'
            }`}
        >
            <div className="mb-4">
                {React.cloneElement(icon, {
                    className: `${
                        darkMode ? 'text-blue-500' : 'text-blue-600'
                    } w-16 h-16`
                })}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className={`mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
                {description}
            </p>
            <button
                className={`mt-auto inline-flex items-center font-medium ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                }`}
            >
                Learn More <span className="ml-1">→</span>
            </button>
        </div>
    );
};

const ModulesOverview = ({ darkMode, setActiveSection }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl font-bold mb-4 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Powerful Modules
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Our comprehensive suite of tools designed to revolutionize your workflow
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ModuleCard
                        title="Xtract"
                        description="Scientific Information, Guidelines, Patents, Clinical Trials. Include AI summarisation and evaluation."
                        icon={<FileText />}
                        onClick={() => setActiveSection('xtract')}
                    />

                    <ModuleCard
                        title="Atlas"
                        description="Agentic AI to monitor for signals as part of post market surveillance with automatic query capabilities."
                        icon={<Database />}
                        onClick={() => setActiveSection('atlas')}
                    />

                    <ModuleCard
                        title="Workroom"
                        description="Area to share and collaborate. Drag and Drop summaries to rapidly create content in multiple formats."
                        icon={<Users />}
                        onClick={() => setActiveSection('workroom')}
                    />
                </div>
            </div>
        </section>
    );
};

export default ModulesOverview;