import React from 'react';
import { PrimaryButton } from '../../common/Button';
import { Star, Calendar, User } from 'lucide-react';

const FeaturedBlog = ({ darkMode, onReadMore }) => {
    const featuredBlog = {
        id: "ai-in-pharmacovigilance",
        title: "The Evolution of AI in Pharmacovigilance: From Reactive to Proactive Signal Detection",
        excerpt: "How artificial intelligence is transforming the pharmaceutical industry's approach to post-market surveillance and safety monitoring, enabling faster detection and response to potential safety signals.",
        image: "/api/placeholder/600/400",
        author: "Dr. Sarah Johnson",
        role: "Head of Pharmacovigilance",
        date: "March 15, 2025",
        readTime: "8 min read"
    };

    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50/50'}`}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Star className="w-3 h-3 mr-2" />
                        Featured Article
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Editor's Pick
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Our most impactful insights on the future of pharmaceutical technology
                    </p>
                </div>

                <div className={`professional-card overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl ${
                    darkMode
                        ? 'glass-dark shadow-gray-900/25'
                        : 'glass-card shadow-blue-100/60'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}>
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <div className="relative overflow-hidden h-64 md:h-full">
                                <img
                                    src={featuredBlog.image}
                                    alt={featuredBlog.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                                    } shadow-lg`}>
                                        FEATURED
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8">
                            <h2 className={`text-2xl font-bold mb-4 leading-tight ${
                                darkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                {featuredBlog.title}
                            </h2>
                            <p className={`text-sm leading-relaxed mb-6 ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                {featuredBlog.excerpt}
                            </p>

                            {/* Author info */}
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 shadow-lg">
                                    {featuredBlog.author.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <div className={`font-medium text-sm ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {featuredBlog.author}
                                    </div>
                                    <div className={`text-xs ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {featuredBlog.role}
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center">
                                    <Calendar className={`w-4 h-4 mr-1 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                    <span className={`text-xs ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {featuredBlog.date}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <User className={`w-4 h-4 mr-1 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                    <span className={`text-xs ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {featuredBlog.readTime}
                                    </span>
                                </div>
                            </div>

                            <PrimaryButton onClick={() => onReadMore(featuredBlog.id)}>
                                Read Full Article
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBlog;