import React from 'react';
import { PrimaryButton } from '../../common/Button';
import { BlogCard } from '../../common/Cards';

const BlogGrid = ({ darkMode }) => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BlogCard
                        title="Leveraging Natural Language Processing in Medical Affairs"
                        excerpt="How NLP is revolutionizing the way pharmaceutical companies extract insights from scientific literature and HCP interactions."
                        image="/api/placeholder/400/250"
                        author="Michael Peterson"
                        role="AI Solutions Architect"
                        date="March 10, 2025"
                    />

                    <BlogCard
                        title="The Future of Collaborative Research in Life Sciences"
                        excerpt="Digital platforms are breaking down silos between research teams and accelerating the pace of scientific discovery."
                        image="/api/placeholder/400/250"
                        author="Dr. Lisa Wong"
                        role="Director of Scientific Communications"
                        date="February 27, 2025"
                    />

                    <BlogCard
                        title="ISO Compliance in Healthcare AI: Navigating the Regulatory Landscape"
                        excerpt="Understanding the complex regulations governing AI applications in pharmaceutical and medical device industries."
                        image="/api/placeholder/400/250"
                        author="Robert Martinez"
                        role="Quality Assurance Lead"
                        date="February 15, 2025"
                    />

                    <BlogCard
                        title="KOL Identification and Engagement in the Digital Age"
                        excerpt="How AI analytics are helping companies find and build relationships with influential medical experts."
                        image="/api/placeholder/400/250"
                        author="Jennifer Thomas"
                        role="Medical Affairs Director"
                        date="January 30, 2025"
                    />

                    <BlogCard
                        title="Streamlining Clinical Trial Protocol Development with AI"
                        excerpt="Reducing time and improving quality in trial design through intelligent automation and knowledge extraction."
                        image="/api/placeholder/400/250"
                        author="Dr. James Wilson"
                        role="Clinical Research Advisor"
                        date="January 22, 2025"
                    />

                    <BlogCard
                        title="The ROI of AI in Pharmaceutical Commercial Operations"
                        excerpt="Measuring the business impact of artificial intelligence solutions across the pharmaceutical value chain."
                        image="/api/placeholder/400/250"
                        author="Sandra Miller"
                        role="Business Analytics Lead"
                        date="January 15, 2025"
                    />
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