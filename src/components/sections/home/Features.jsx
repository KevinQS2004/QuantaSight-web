import React from 'react';
import { Database, Users, Award } from 'lucide-react';
import {useTheme} from "../../../context/ThemeContext.jsx";

// Improved FeatureCard component with better light mode styling
const FeatureCard = ({ title, subtitle, description, icon }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
            darkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 border border-gray-100'
        }`}>
            <div className="mb-4">
                {React.cloneElement(icon, {
                    className: `${
                        darkMode ? 'text-blue-500' : 'text-blue-600'
                    } w-12 h-12`
                })}
            </div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <h4 className={`text-sm font-medium mb-3 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
                {subtitle}
            </h4>
            <p className={`${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
                {description}
            </p>
        </div>
    );
};

const Features = ({ darkMode }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl font-bold mb-4 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        You're in good hands
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        With powerful time-saving and collaborative features, QuantaSight helps you focus on the tasks and provides impactful insights within no time
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Feature Rich"
                        subtitle="Effortless Research Advancement"
                        description="It introduces a paradigm where tasks that once consumed weeks now transpire in mere minutes. The catalyst behind this transformation is Hercules, our AI co-pilot."
                        icon={<Database />}
                    />

                    <FeatureCard
                        title="Collaborate"
                        subtitle="Enhance Collaboration with QuantaSight"
                        description="Provides effortless collaboration among peers, enabling the seamless sharing of insights and findings. In doing so, it not only sparks innovation but also accelerates the pace of scientific progress."
                        icon={<Users />}
                    />

                    <FeatureCard
                        title="Save Time"
                        subtitle="Faster Process"
                        description="Supercharging your work tasks from days and weeks to minutes and seconds. Our AI-powered platform automates repetitive tasks and streamlines complex workflows."
                        icon={<Award />}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;