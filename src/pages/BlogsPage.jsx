import React from 'react';
import { useTheme } from '../context/ThemeContext';
import BlogsHero from '../components/sections/blogs/BlogsHero';
import FeaturedBlog from '../components/sections/blogs/FeaturedBlog';
import BlogGrid from '../components/sections/blogs/BlogGrid';

const BlogsPage = () => {
    const { darkMode } = useTheme();

    return (
        <div>
            <BlogsHero darkMode={darkMode} />
            <FeaturedBlog darkMode={darkMode} />
            <BlogGrid darkMode={darkMode} />
        </div>
    );
};

export default BlogsPage;