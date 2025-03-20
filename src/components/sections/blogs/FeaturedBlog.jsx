import React from 'react';
import { PrimaryButton } from '../../common/Button';

const FeaturedBlog = ({ darkMode, onReadMore }) => {
    // Featured blog details - could be passed as props instead
    const featuredBlog = {
        id: "ai-in-pharmacovigilance",
        title: "The Evolution of AI in Pharmacovigilance: From Reactive to Proactive Signal Detection",
        excerpt: "How artificial intelligence is transforming the pharmaceutical industry's approach to post-market surveillance and safety monitoring...",
        image: "/api/placeholder/600/400",
        author: "Dr. Sarah Johnson",
        role: "Head of Pharmacovigilance",
        date: "March 15, 2025"
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <img
                                src={featuredBlog.image}
                                alt={featuredBlog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <div className="text-sm text-blue-600 font-semibold mb-2">FEATURED</div>
                            <h2 className="text-2xl font-bold mb-4">{featuredBlog.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {featuredBlog.excerpt}
                            </p>
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                                    {featuredBlog.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-medium">{featuredBlog.author}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{featuredBlog.role}</div>
                                </div>
                            </div>
                            <PrimaryButton onClick={() => onReadMore(featuredBlog.id)}>
                                Read More
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBlog;