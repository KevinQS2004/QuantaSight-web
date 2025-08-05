import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const MainLayout = ({ children }) => {
    const { darkMode } = useTheme();
    const location = useLocation();
    useScrollAnimation();

    // Get current active section from pathname
    const activeSection = location.pathname === '/' ? 'home' : location.pathname.slice(1);

    return (
        <div className={`font-sans min-h-screen ${
            darkMode
                ? 'dark bg-gray-900 text-white'
                : 'bg-gray-50 text-gray-800'
        }`}>
            <Header activeSection={activeSection} />

            <main className={darkMode ? '' : 'text-gray-800'}>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;