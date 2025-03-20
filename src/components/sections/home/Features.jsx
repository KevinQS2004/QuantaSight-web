import React from 'react';
import { Database, Users, Award } from 'lucide-react';
import { FeatureCard } from '../../common/Cards';

const Features = ({ darkMode }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">You're in good hands</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        With powerful time-saving and collaborative features, QuantaSight helps you focus on the tasks and provides impactful insights within no time
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Feature Rich"
                        subtitle="Effortless Research Advancement"
                        description="It introduces a paradigm where tasks that once consumed weeks now transpire in mere minutes. The catalyst behind this transformation is Hercules, our AI co-pilot."
                        icon={<Database className="w-12 h-12 text-blue-600" />}
                    />

                    <FeatureCard
                        title="Collaborate"
                        subtitle="Enhance Collaboration with QuantaSight"
                        description="Provides effortless collaboration among peers, enabling the seamless sharing of insights and findings. In doing so, it not only sparks innovation but also accelerates the pace of scientific progress."
                        icon={<Users className="w-12 h-12 text-blue-600" />}
                    />

                    <FeatureCard
                        title="Save Time"
                        subtitle="Faster Process"
                        description="Supercharging your work tasks from days and weeks to minutes and seconds. Our AI-powered platform automates repetitive tasks and streamlines complex workflows."
                        icon={<Award className="w-12 h-12 text-blue-600" />}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;