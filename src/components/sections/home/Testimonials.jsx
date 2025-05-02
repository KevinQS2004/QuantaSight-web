import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

const TestimonialCard = ({ quote, author, title, company }) => {
    const { darkMode } = useTheme();
    const firstLetter = author.charAt(0);

    return (
        <div className={`p-6 rounded-xl shadow-lg ${
            darkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 border border-gray-100'
        }`}>
            <div className="flex items-center mb-4">
                <div className={`text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-700'
                }`}>
                    {firstLetter}
                </div>
                <div>
                    <p className="font-medium">{author}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {title}, {company}
                    </p>
                </div>
            </div>

            <div className="mb-2">
                <span className={`text-4xl leading-none ${
                    darkMode ? 'text-blue-500' : 'text-blue-600'
                }`}>&ldquo;</span>
            </div>

            <p className={`italic mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
                {quote}
            </p>
        </div>
    );
};

const Testimonials = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl font-bold mb-4 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        What Our Clients Say
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${
                        darkMode ? 'text-black-400' : 'text-black-600'
                    }`}>
                        Hear from pharmaceutical and life sciences professionals who have transformed their workflows with QuantaSight
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="QuantaSight has revolutionized how our medical affairs team processes scientific literature. Tasks that used to take weeks are now completed in hours."
                        author="Dr. Sarah Chen"
                        title="Medical Affairs Director"
                        company="Global Pharma Inc."
                    />

                    <TestimonialCard
                        quote="The Pharmacovigilance Atlas module has dramatically improved our signal detection capabilities. We're identifying potential safety concerns much earlier."
                        author="James Wilson"
                        title="Head of Pharmacovigilance"
                        company="BioScience Solutions"
                    />

                    <TestimonialCard
                        quote="QS Workroom has transformed how our team collaborates across global offices. The AI-powered content generation saves us countless hours of work."
                        author="Maria Rodriguez"
                        title="Scientific Communications Lead"
                        company="Life Sciences Partners"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;