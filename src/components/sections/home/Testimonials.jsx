import React from 'react';
import Testimonial from '../../common/Testimonial';

const Testimonials = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Hear from pharmaceutical and life sciences professionals who have transformed their workflows with QuantaSight
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Testimonial
                        quote="QuantaSight has revolutionized how our medical affairs team processes scientific literature. Tasks that used to take weeks are now completed in hours."
                        author="Dr. Sarah Chen"
                        title="Medical Affairs Director"
                        company="Global Pharma Inc."
                    />

                    <Testimonial
                        quote="The Pharmacovigilance Atlas module has dramatically improved our signal detection capabilities. We're identifying potential safety concerns much earlier."
                        author="James Wilson"
                        title="Head of Pharmacovigilance"
                        company="BioScience Solutions"
                    />

                    <Testimonial
                        quote="QS Workroom has transformed how our team collaborates across global offices. The AI-powered content generation saves us countless hours of work."
                        author="Maria Rodriguez"
                        title="Scientific Communications Lead"
                        company="Life Sciences Partners"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;