import React from 'react';
import Testimonial from '../../common/Testimonial';

const DemoTestimonials = ({ darkMode }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Hear from teams who have transformed their workflow with QuantaSight
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Testimonial
                        quote="The demo completely changed our perception of what AI could do for our medical affairs team. We went from skeptical to sold in 30 minutes."
                        author="Dr. James Patterson"
                        title="Medical Director"
                        company="Global Biopharma Inc."
                    />

                    <Testimonial
                        quote="What impressed me most during the demo was how intuitive the platform is. Our team was able to start using it effectively with minimal training."
                        author="Linda Martinez"
                        title="Head of Scientific Communications"
                        company="Innovate Therapeutics"
                    />

                    <Testimonial
                        quote="The ROI calculation the QuantaSight team provided during our demo made the business case clear. We've since seen a 70% reduction in research time."
                        author="Michael Chang"
                        title="VP of Operations"
                        company="MediScience Partners"
                    />
                </div>
            </div>
        </section>
    );
};

export default DemoTestimonials;