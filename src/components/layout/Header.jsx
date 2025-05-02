import React, { useState, useEffect, useRef } from 'react';
import {
    Sun, Moon, Menu, X, ChevronDown, Brain,
    Home, Info, FileText, Phone, LogIn
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NavLink, MobileNavLink, DropdownItem } from '../common/Navigation';
import logo from '../../assets/images/qs_logo_small.png';
import qs_name_nobg from '../../assets/images/qs_name_nobg.png';

const Header = ({ activeSection, setActiveSection }) => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        features: false,
        modules: false
    });

    // Create refs for each dropdown
    const featuresRef = useRef(null);
    const modulesRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDropdown = (menu) => {
        // Close other dropdowns when opening a new one
        setDropdownOpen({
            features: menu === 'features' ? !dropdownOpen.features : false,
            modules: menu === 'modules' ? !dropdownOpen.modules : false
        });
    };

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close features dropdown if click outside
            if (featuresRef.current && !featuresRef.current.contains(event.target)) {
                setDropdownOpen(prev => ({...prev, features: false}));
            }

            // Close modules dropdown if click outside
            if (modulesRef.current && !modulesRef.current.contains(event.target)) {
                setDropdownOpen(prev => ({...prev, modules: false}));
            }
        };

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="h-10 w-10 flex items-center">
                            <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
                        </span>

                        <span className="h-8 flex items-center">
                            <img src={qs_name_nobg} alt="QuantaSight" className="h-full w-auto object-contain" />
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <NavLink
                            title="Home"
                            icon={<Home size={16} />}
                            active={activeSection === 'home'}
                            onClick={() => setActiveSection('home')}
                        />
                        <NavLink
                            title="About"
                            icon={<Info size={16} />}
                            active={activeSection === 'about'}
                            onClick={() => setActiveSection('about')}
                        />

                        {/* Features Dropdown */}
                        <div className="relative" ref={featuresRef}>
                            <button
                                className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${activeSection === 'features' ? 'text-blue-600' : ''}`}
                                onClick={() => toggleDropdown('features')}
                            >
                                <span>Features</span>
                                <ChevronDown size={16} className={`transition-transform ${dropdownOpen.features ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen.features && (
                                <div className={`absolute left-0 mt-2 w-60 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-md shadow-lg z-10 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div className="py-2">
                                        <DropdownItem
                                            title="XtractXtract"
                                            description="AI-powered research & analysis"
                                            onClick={() => {
                                                setActiveSection('xtract');
                                                setDropdownOpen({...dropdownOpen, features: false});
                                            }}
                                        />
                                        <DropdownItem
                                            title="Medical Affairs Intelligence"
                                            description="Unifying data from multiple sources"
                                            onClick={() => {
                                                setDropdownOpen({...dropdownOpen, features: false});
                                            }}
                                        />
                                        <DropdownItem
                                            title="Pharmacovigilance Atlas"
                                            description="AI-driven signal monitoring"
                                            onClick={() => {
                                                setDropdownOpen({...dropdownOpen, features: false});
                                            }}
                                        />
                                        <DropdownItem
                                            title="QS Workroom"
                                            description="Collaboration & content generation"
                                            onClick={() => {
                                                setDropdownOpen({...dropdownOpen, features: false});
                                            }}
                                        />
                                        <DropdownItem
                                            title="AI CRM TL Dashboard"
                                            description="Manage clients with AI assistance"
                                            onClick={() => {
                                                setDropdownOpen({...dropdownOpen, features: false});
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modules Dropdown */}
                        <div className="relative" ref={modulesRef}>
                            <button
                                className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${activeSection === 'modules' ? 'text-blue-600' : ''}`}
                                onClick={() => toggleDropdown('modules')}
                            >
                                <span>Modules</span>
                                <ChevronDown size={16} className={`transition-transform ${dropdownOpen.modules ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen.modules && (
                                <div className={`absolute left-0 mt-2 w-60 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-md shadow-lg z-10 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div className="py-2">
                                        <DropdownItem
                                            title="Xtract"
                                            description="Scientific research & AI summarization"
                                            onClick={() => {
                                                setActiveSection('xtract');
                                                setDropdownOpen({...dropdownOpen, modules: false});
                                            }}
                                        />
                                        <DropdownItem
                                            title="Atlas"
                                            description="Agentic AI query monitoring"
                                            onClick={() => {
                                                setActiveSection('atlas');
                                                setDropdownOpen({...dropdownOpen, modules: false});
                                            }}
                                        />
                                        <DropdownItem
                                            title="Workroom"
                                            description="Team collaboration & content sharing"
                                            onClick={() => {
                                                setActiveSection('workroom');
                                                setDropdownOpen({...dropdownOpen, modules: false});
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink
                            title="Blogs"
                            icon={<FileText size={16} />}
                            active={activeSection === 'blogs'}
                            onClick={() => setActiveSection('blogs')}
                        />
                        <NavLink
                            title="Request Demo"
                            icon={<Phone size={16} />}
                            active={activeSection === 'demo'}
                            onClick={() => setActiveSection('demo')}
                            isButton={true}
                        />
                        <NavLink
                            title="Login"
                            icon={<LogIn size={16} />}
                            active={activeSection === 'login'}
                            onClick={() => setActiveSection('login')}
                        />
                    </nav>

                    {/* Dark Mode Toggle & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`md:hidden py-4 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <nav className="flex flex-col space-y-4">
                        <MobileNavLink
                            title="Home"
                            icon={<Home size={18} />}
                            onClick={() => {setActiveSection('home'); setMobileMenuOpen(false);}}
                        />
                        <MobileNavLink
                            title="About"
                            icon={<Info size={18} />}
                            onClick={() => {setActiveSection('about'); setMobileMenuOpen(false);}}
                        />

                        {/* Mobile Features Dropdown */}
                        <div>
                            <button
                                className="w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                onClick={() => toggleDropdown('features')}
                            >
                                <span className="font-medium">Features</span>
                                <ChevronDown size={18} className={dropdownOpen.features ? 'rotate-180 transform' : ''} />
                            </button>

                            {dropdownOpen.features && (
                                <div className="pl-6 mt-2 space-y-2">
                                    <MobileNavLink
                                        title="XtractXtract"
                                        onClick={() => {setActiveSection('xtract'); setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, features: false});}}
                                    />
                                    <MobileNavLink
                                        title="Medical Affairs Intelligence"
                                        onClick={() => {setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, features: false});}}
                                    />
                                    <MobileNavLink
                                        title="Pharmacovigilance Atlas"
                                        onClick={() => {setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, features: false});}}
                                    />
                                    <MobileNavLink
                                        title="QS Workroom"
                                        onClick={() => {setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, features: false});}}
                                    />
                                    <MobileNavLink
                                        title="AI CRM TL Dashboard"
                                        onClick={() => {setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, features: false});}}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Mobile Modules Dropdown */}
                        <div>
                            <button
                                className="w-full flex items-center justify-between px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                onClick={() => toggleDropdown('modules')}
                            >
                                <span className="font-medium">Modules</span>
                                <ChevronDown size={18} className={dropdownOpen.modules ? 'rotate-180 transform' : ''} />
                            </button>

                            {dropdownOpen.modules && (
                                <div className="pl-6 mt-2 space-y-2">
                                    <MobileNavLink
                                        title="Xtract"
                                        onClick={() => {setActiveSection('xtract'); setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, modules: false});}}
                                    />
                                    <MobileNavLink
                                        title="Atlas"
                                        onClick={() => {setActiveSection('atlas'); setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, modules: false});}}
                                    />
                                    <MobileNavLink
                                        title="Workroom"
                                        onClick={() => {setActiveSection('workroom'); setMobileMenuOpen(false); setDropdownOpen({...dropdownOpen, modules: false});}}
                                    />
                                </div>
                            )}
                        </div>

                        <MobileNavLink
                            title="Blogs"
                            icon={<FileText size={18} />}
                            onClick={() => {setActiveSection('blogs'); setMobileMenuOpen(false);}}
                        />
                        <MobileNavLink
                            title="Request Demo"
                            icon={<Phone size={18} />}
                            onClick={() => {setActiveSection('demo'); setMobileMenuOpen(false);}}
                            isButton={true}
                        />
                        <MobileNavLink
                            title="Login"
                            icon={<LogIn size={18} />}
                            onClick={() => {setActiveSection('login'); setMobileMenuOpen(false);}}
                        />
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;