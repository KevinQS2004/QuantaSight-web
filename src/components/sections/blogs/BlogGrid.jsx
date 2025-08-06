import React from 'react';
import { PrimaryButton } from '../../common/Button';
import { BlogCard } from '../../common/Cards';
import { Grid3X3 } from 'lucide-react';

const BlogGrid = ({ darkMode, blogs, onReadMore }) => {
    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Grid3X3 className="w-3 h-3 mr-2" />
                        Latest Articles
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Recent Insights
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Explore our latest thoughts on AI, pharmaceutical innovation, and industry trends
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            {...blog}
                            onReadMore={() => onReadMore(blog.id)}
                            darkMode={darkMode}
                        />
                    ))}
                </div>

                <div className="flex justify-center">
                    <PrimaryButton onClick={() => {}}>
                        Load More Articles
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;