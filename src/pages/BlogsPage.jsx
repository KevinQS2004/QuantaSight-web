import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import BlogsHero from '../components/sections/blogs/BlogsHero';
import FeaturedBlog from '../components/sections/blogs/FeaturedBlog';
import BlogGrid from '../components/sections/blogs/BlogGrid';
import BlogDetail from '../components/sections/blogs/BlogDetail';

// Sample blog content using the Lorem ipsum text you provided
const loremIpsumContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat a est quis gravida. Proin euismod neque lorem, eu ornare ligula sagittis quis. Maecenas sit amet tristique massa, in egestas ligula. Suspendisse malesuada ultricies posuere. Phasellus ultricies, ipsum nec posuere malesuada, purus diam viverra est, fringilla laoreet nisi lacus at sem. Praesent feugiat diam nec neque imperdiet, vel ullamcorper ligula egestas. Donec vel turpis vel diam sollicitudin rutrum id eget elit. Nulla a hendrerit magna. Maecenas malesuada purus nibh, non hendrerit turpis blandit non. Nunc nec placerat purus.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam egestas placerat semper. Maecenas vehicula tempus varius. Vivamus et turpis velit. Praesent a mattis tortor, sed aliquet turpis. Proin gravida id leo ut posuere. Etiam lacus diam, mollis et eros at, gravida hendrerit elit. Pellentesque commodo hendrerit erat at cursus. Sed eget odio eget enim finibus lacinia. Suspendisse potenti. Sed congue viverra augue, in posuere velit suscipit eu. Nullam ipsum diam, laoreet eget suscipit ut, aliquam at libero.

Phasellus ultrices vehicula leo, nec tincidunt dolor eleifend ac. Vivamus dignissim turpis vel condimentum luctus. Sed lobortis at lacus in bibendum. Pellentesque in dui euismod, posuere felis id, faucibus tortor. Sed rhoncus neque a lacus dignissim dignissim. Sed augue dui, iaculis id malesuada non, commodo vitae risus. Sed tincidunt sodales turpis a ornare. Nunc dignissim, metus elementum gravida euismod, orci quam maximus sapien, nec semper turpis mauris sed magna.`;

// Sample blog data
const blogsData = [
    {
        id: "nlp-in-medical-affairs",
        title: "Leveraging Natural Language Processing in Medical Affairs",
        excerpt: "How NLP is revolutionizing the way pharmaceutical companies extract insights from scientific literature and HCP interactions.",
        image: "/api/placeholder/400/250",
        author: "Michael Peterson",
        role: "AI Solutions Architect",
        date: "March 10, 2025",
        content: loremIpsumContent
    },
    {
        id: "collaborative-research",
        title: "The Future of Collaborative Research in Life Sciences",
        excerpt: "Digital platforms are breaking down silos between research teams and accelerating the pace of scientific discovery.",
        image: "/api/placeholder/400/250",
        author: "Dr. Lisa Wong",
        role: "Director of Scientific Communications",
        date: "February 27, 2025",
        content: loremIpsumContent
    },
    // Add more blog data as needed
];

const BlogsPage = () => {
    const { darkMode } = useTheme();
    const [activeBlogId, setActiveBlogId] = useState(null);

    const activeBlog = blogsData.find(blog => blog.id === activeBlogId);

    return (
        <div>
            {activeBlog ? (
                <BlogDetail
                    blog={activeBlog}
                    onBack={() => setActiveBlogId(null)}
                />
            ) : (
                <>
                    <BlogsHero darkMode={darkMode} />
                    <FeaturedBlog
                        darkMode={darkMode}
                        onReadMore={() => setActiveBlogId("featured-blog")}
                    />
                    <BlogGrid
                        darkMode={darkMode}
                        blogs={blogsData}
                        onReadMore={setActiveBlogId}
                    />
                </>
            )}
        </div>
    );
};

export default BlogsPage;