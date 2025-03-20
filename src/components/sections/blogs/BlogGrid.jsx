import React from 'react';
import { PrimaryButton } from '../../common/Button';
import { BlogCard } from '../../common/Cards';

const BlogGrid = ({ darkMode, blogs, onReadMore }) => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            {...blog}
                            onReadMore={() => onReadMore(blog.id)}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <PrimaryButton onClick={() => {}}>
                        Load More Articles
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;