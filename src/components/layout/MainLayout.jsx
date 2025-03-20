import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const MainLayout = ({ children, activeSection, setActiveSection }) => {
    const { darkMode } = useTheme();
    useScrollAnimation();
    return (
        <div className={`font-sans min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <main>
                {children}
            </main>

            <Footer setActiveSection={setActiveSection} />
        </div>
    );
};

export default MainLayout;