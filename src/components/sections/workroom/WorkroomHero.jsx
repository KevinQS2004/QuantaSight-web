import React from 'react';
import { PrimaryButton } from '../../common/Button';

const WorkroomHero = ({ darkMode }) => {
    return (
        <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                QS Workroom
              </span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                            Collaborate seamlessly and create content efficiently. Drag and drop summaries to rapidly generate documents in multiple formats for various stakeholders.
                        </p>
                        <PrimaryButton onClick={() => {}}>
                            Request a Demo
                        </PrimaryButton>
                    </div>
                    <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Workroom Module Interface"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkroomHero;