import React from 'react';
import { ChevronRight } from 'lucide-react';
import SocialButton from './SocialButton';

export const FeatureCard = ({ title, subtitle, description, icon }) => {
    return (
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <h4 className="text-md font-medium mb-3 text-blue-600 dark:text-blue-400">{subtitle}</h4>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export const ModuleCard = ({ title, description, icon, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-700 group"
        >
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:bg-blue-500 transition-colors duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                        {icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                <button className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Learn More <ChevronRight size={16} className="ml-1" />
                </button>
            </div>
        </div>
    );
};

export const TeamMember = ({ name, title, image, linkdin, twitter }) => {
    return (
        <div className="text-center group transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto relative">
                <img
                    src={image || "https://via.placeholder.com/200x200"}
                    alt={name}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="font-bold text-lg">{name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{title}</div>
            <div className="mt-2 flex justify-center space-x-2">
                <SocialButton icon="linkedin" link={linkdin} />
                <SocialButton icon="twitter" link={twitter}/>
            </div>
        </div>
    );
};

export const BlogCard = ({ title, excerpt, image, author, role, date }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <div className="relative">
                <img src={image || "https://via.placeholder.com/400x250"} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {date}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{excerpt}</p>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        {author.charAt(0)}
                    </div>
                    <div>
                        <div className="font-medium">{author}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};