import React from 'react';
import SocialButton from '../../common/SocialButton';
import founder from "../../../assets/images/Founder.png";

const Founder = ({ darkMode }) => {
    return (
        <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-gray-50 dark:border-gray-800 shadow-lg">
                            <img
                                src={founder}
                                alt="Sameer Trikha"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-12">
                        <h2 className={`text-3xl font-bold mb-4 ${
                            darkMode ? 'text-white' : 'text-gray-800'
                        }`}>Our Founder</h2>
                        <p className={`text-lg mb-6 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            QuantaSight was founded in 2022 by Sameer Trikha. Based in London, UK, Sameer is a practicing Ophthalmic Surgeon and entrepreneur, having previously founded and sold a computer vision AI company in the Ophthalmic space. Given the rapid advances in NLP technology, he recognised the need for applicable solutions for the healthcare industry. Sameer has built a 'remote first' team, harnessing the best talent from Asia and Europe to produce QuantaSight's Hercules platform.
                        </p>
                        <div className="flex space-x-4">
                            <SocialButton icon="linkedin" link="https://www.linkedin.com/in/sameer-trikha-1b987154/" />
                            <SocialButton icon="twitter" link="https://x.com/SameerTrikha"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;