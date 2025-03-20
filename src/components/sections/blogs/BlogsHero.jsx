import React from 'react';

const BlogsHero = ({ darkMode }) => {
    return (
        <section className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Updates</h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                        Stay informed with the latest trends, research, and innovations in pharmaceutical and life sciences technology
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogsHero;