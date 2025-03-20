import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Hero from '../components/sections/home/Hero';
import Features from '../components/sections/home/Features';
import ModulesOverview from '../components/sections/home/ModulesOverview';
import CTASection from '../components/sections/home/CTASection';
import Testimonials from '../components/sections/home/Testimonials';

const HomePage = ({ setActiveSection }) => {
    const { darkMode } = useTheme();

    return (
        <div>
            <Hero darkMode={darkMode} setActiveSection={setActiveSection} />
            <Features darkMode={darkMode} />
            <ModulesOverview darkMode={darkMode} setActiveSection={setActiveSection} />
            <CTASection darkMode={darkMode} setActiveSection={setActiveSection} />
            <Testimonials darkMode={darkMode} />
        </div>
    );
};

export default HomePage;