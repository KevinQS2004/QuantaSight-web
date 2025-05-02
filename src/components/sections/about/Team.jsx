import React from 'react';
import { TeamMember } from '../../common/Cards';
import founder from "../../../assets/images/Founder.png";
import cto from "../../../assets/images/cto.png";

const Team = ({ darkMode }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A diverse group of experts in AI, healthcare, and pharmaceutical sciences
                    </p>
                </div>

                <div className="flex justify-center w-full ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-36 8max-w-4xl mx-auto">
                        <TeamMember
                            name="Dr. Sameer Trikha"
                            title="Founder & CEO"
                            image={founder}
                            linkdin="https://www.linkedin.com/in/sameer-trikha-1b987154/"
                            twitter="https://x.com/SameerTrikha"
                        />
                        <TeamMember
                            name="Ayush Mishra"
                            title="Chief Technology Officer"
                            image={cto}
                            linkdin="https://www.linkedin.com/in/ayush-mishra-b8882712b/"
                            twitter="https://www.linkedin.com/in/ayush-mishra-b8882712b/"
                        />

                        <TeamMember
                            name="Bhargav"
                            title="AI Expert"
                            image="/api/placeholder/200/200"
                            linkdin="https://www.linkedin.com/in/bhargav-sri-sai-147331204/"
                            twitter="https://www.linkedin.com/in/ayush-mishra-b8882712b/"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;