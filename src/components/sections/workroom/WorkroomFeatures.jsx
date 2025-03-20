import React from 'react';
import { Users, FileText, Shield } from 'lucide-react';

const WorkroomFeatures = ({ darkMode }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Seamless Collaboration</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Enhance teamwork and accelerate content creation with our intuitive collaboration platform
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <div className="flex justify-center mb-6">
                            <Users className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Team Collaboration</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Work together in real-time with colleagues across departments and locations. Share insights, comment on documents, and track changes with version history.
                        </p>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <div className="flex justify-center mb-6">
                            <FileText className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Content Generation</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Drag and drop AI-generated summaries into custom templates to rapidly create professional documents, presentations, and reports tailored to different audiences.
                        </p>
                    </div>

                    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                        <div className="flex justify-center mb-6">
                            <Shield className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Secure Sharing</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Control access to sensitive information with granular permission settings. Share content securely with internal teams or external stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkroomFeatures;