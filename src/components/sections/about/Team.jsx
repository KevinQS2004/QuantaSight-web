import React from 'react';
import { Users, MapPin, ExternalLink } from 'lucide-react';
import SocialButton from '../../common/SocialButton';
import founder from "../../../assets/images/Founder.png";
import cto from "../../../assets/images/cto.png";

// Enhanced TeamMember component with professional styling
const TeamMember = ({ name, title, image, linkdin, twitter, location }) => {
    return (
        <div className={`professional-card p-6 text-center group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl`} style={{
            boxShadow: '0 8px 20px -6px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
        }}>
            <div className="relative mb-6">
                <div className="rounded-full overflow-hidden w-24 h-24 mx-auto relative shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                        src={image || "https://via.placeholder.com/200x200"}
                        alt={name}
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                {/* Professional badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 glass-light rounded-full text-xs font-medium text-blue-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Team Lead
                </div>
            </div>

            <div className="space-y-2 mb-4">
                <h3 className="font-semibold text-base text-gray-800 dark:text-white">{name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{title}</p>
                {location && (
                    <div className="flex items-center justify-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {location}
                    </div>
                )}
            </div>

            <div className="flex justify-center space-x-3">
                <SocialButton icon="linkedin" link={linkdin} />
                <SocialButton icon="twitter" link={twitter} />
            </div>
        </div>
    );
};

const Team = ({ darkMode }) => {
    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Users className="w-3 h-3 mr-2" />
                        Leadership Team
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Meet Our Leadership
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        A diverse group of experts in AI, healthcare, and pharmaceutical sciences leading the future of medical research
                    </p>
                </div>

                {/* Team Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <TeamMember
                            name="Dr. Sameer Trikha"
                            title="Founder & CEO"
                            image={founder}
                            location="London, UK"
                            linkdin="https://www.linkedin.com/in/sameer-trikha-1b987154/"
                            twitter="https://x.com/SameerTrikha"
                        />
                        <TeamMember
                            name="Ayush Mishra"
                            title="Chief Technology Officer"
                            image={cto}
                            location="Remote"
                            linkdin="https://www.linkedin.com/in/ayush-mishra-b8882712b/"
                            twitter="https://www.linkedin.com/in/ayush-mishra-b8882712b/"
                        />
                        <TeamMember
                            name="Bhargav Sri Sai"
                            title="AI Research Lead"
                            image="/api/placeholder/200/200"
                            location="Remote"
                            linkdin="https://www.linkedin.com/in/bhargav-sri-sai-147331204/"
                            twitter="https://www.linkedin.com/in/bhargav-sri-sai-147331204/"
                        />
                        <TeamMember
                            name="Kevin Patel"
                            title="Senior Developer"
                            image="/api/placeholder/200/200"
                            location="Remote"
                            linkdin="https://www.linkedin.com/in/kevin222004/"
                            twitter="https://x.com/KevinPatel2004"
                        />
                    </div>

                    {/* Team Stats */}
                    {/*<div className={`professional-card p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl ${*/}
                    {/*    darkMode*/}
                    {/*        ? 'glass-dark shadow-gray-900/20'*/}
                    {/*        : 'glass-light shadow-blue-100/40'*/}
                    {/*}`}>*/}
                    {/*    <h3 className="text-lg font-semibold mb-6">Our Global Team</h3>*/}
                    {/*    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">*/}
                    {/*        <div>*/}
                    {/*            <div className="text-2xl font-bold text-blue-600 mb-1 drop-shadow-sm">15+</div>*/}
                    {/*            <div className="text-xs text-gray-500">Team Members</div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="text-2xl font-bold text-green-600 mb-1 drop-shadow-sm">5</div>*/}
                    {/*            <div className="text-xs text-gray-500">Countries</div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="text-2xl font-bold text-purple-600 mb-1 drop-shadow-sm">Remote</div>*/}
                    {/*            <div className="text-xs text-gray-500">First Culture</div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className="text-2xl font-bold text-indigo-600 mb-1 drop-shadow-sm">24/7</div>*/}
                    {/*            <div className="text-xs text-gray-500">Global Coverage</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>
            </div>
        </section>
    );
};

export default Team;