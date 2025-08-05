import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const TestimonialCard = ({ quote, author, title, company, rating = 5 }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`professional-card h-full min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-1 p-8 ${
            darkMode
                ? 'glass-dark text-white shadow-xl shadow-gray-900/25 hover:shadow-2xl hover:shadow-gray-900/40'
                : 'glass-card text-gray-800 shadow-xl shadow-blue-100/60 hover:shadow-2xl hover:shadow-blue-200/70'
        }`} style={{
            boxShadow: darkMode
                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
        }}>
            {/* Rating */}
            <div className="flex items-center mb-4">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" />
                ))}
            </div>

            {/* Quote */}
            <div className="flex-1 mb-6">
                <Quote className={`w-6 h-6 mb-3 opacity-60 drop-shadow-sm ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <p className={`text-sm leading-relaxed italic ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    {quote}
                </p>
            </div>

            {/* Author */}
            <div className={`flex items-center pt-6 border-t transition-all duration-300 ${
                darkMode ? 'border-gray-200/30' : 'border-gray-200/30'
            }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 shadow-lg transition-all duration-300 ${
                    darkMode
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-blue-500/30'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 shadow-blue-600/40'
                }`}>
                    {author.charAt(0)}
                </div>
                <div>
                    <div className="font-medium text-sm">{author}</div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {title}
                    </div>
                    <div className={`text-xs flex items-center mt-1 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                        <Building2 className="w-3 h-3 mr-1" />
                        {company}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials = ({ darkMode }) => {
    const testimonials = [
        {
            quote: "QuantaSight has revolutionized our medical affairs workflow. What used to take our team weeks of literature review now takes hours. The AI-powered insights are remarkably accurate and have accelerated our drug development timeline significantly.",
            author: "Dr. Sarah Chen",
            title: "VP of Medical Affairs",
            company: "BioPharma Global",
            rating: 5
        },
        {
            quote: "The pharmacovigilance capabilities are outstanding. Atlas has improved our signal detection by 60% and reduced false positives dramatically. It's become an essential tool for our safety monitoring operations.",
            author: "James Wilson",
            title: "Head of Drug Safety",
            company: "Therapeutic Solutions Inc.",
            rating: 5
        },
        {
            quote: "The collaboration features in Workroom have transformed how our global teams work together. We can now create regulatory documents in multiple formats simultaneously, saving countless hours of manual work.",
            author: "Dr. Maria Rodriguez",
            title: "Director of Regulatory Affairs",
            company: "MedTech Innovations",
            rating: 5
        }
    ];

    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50/30 to-white'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Star className="w-3 h-3 mr-2" />
                        Customer Success Stories
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Trusted by Leading Organizations
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        See how pharmaceutical and life sciences professionals are transforming their research workflows
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                        />
                    ))}
                </div>

                {/* Trust metrics */}
                <div className={`p-8 rounded-xl text-center transition-all duration-300 ${
                    darkMode
                        ? 'glass-dark shadow-xl shadow-gray-900/20'
                        : 'glass-light shadow-xl shadow-blue-100/40'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 8px 20px -6px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 8px 20px -6px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                }}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold text-blue-600 drop-shadow-sm">98%</div>
                            <div className="text-xs text-gray-500">Customer Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-600 drop-shadow-sm">70%</div>
                            <div className="text-xs text-gray-500">Time Reduction</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-600 drop-shadow-sm">500+</div>
                            <div className="text-xs text-gray-500">Active Researchers</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-600 drop-shadow-sm">24/7</div>
                            <div className="text-xs text-gray-500">Expert Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;