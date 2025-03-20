import React from 'react';
import { ArrowLeft } from 'lucide-react';
import SocialButton from '../../common/SocialButton';

const BlogDetail = ({ blog, onBack }) => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back button */}
                <button
                    onClick={onBack}
                    className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Blogs
                </button>

                {/* Blog header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                            {blog.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-medium">{blog.author}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{blog.role} · {blog.date}</div>
                        </div>
                    </div>
                </div>

                {/* Featured image */}
                <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-auto"
                    />
                </div>

                {/* Blog content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {blog.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-6">{paragraph}</p>
                    ))}
                </div>

                {/* Share section */}
                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-medium">Share this article</div>
                        <div className="flex space-x-3">
                            <SocialButton icon="linkedin" link="#" />
                            <SocialButton icon="twitter" link="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;