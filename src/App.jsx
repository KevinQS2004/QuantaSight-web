import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import XtractPage from './pages/XtractPage';
import AtlasPage from './pages/AtlasPage';
import WorkroomPage from './pages/WorkroomPage';
import BlogsPage from './pages/BlogsPage';
import DemoPage from './pages/DemoPage';
import LoginPage from './pages/LoginPage';
import './styles/globals.css';
import './styles/animations.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    // Render the appropriate page based on activeSection
    const renderActivePage = () => {
        switch (activeSection) {
            case 'home':
                return <HomePage setActiveSection={setActiveSection} />;
            case 'about':
                return <AboutPage />;
            case 'xtract':
                return <XtractPage />;
            case 'atlas':
                return <AtlasPage />;
            case 'workroom':
                return <WorkroomPage />;
            case 'blogs':
                return <BlogsPage />;
            case 'demo':
                return <DemoPage />;
            case 'login':
                return <LoginPage />;
            default:
                return <HomePage setActiveSection={setActiveSection} />;
        }
    };

    return (
        <ThemeProvider>
            <MainLayout
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            >
                {renderActivePage()}
            </MainLayout>
        </ThemeProvider>
    );
};

export default App;