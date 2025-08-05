import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Sun, Moon, Menu, X, ChevronDown,
    Home, Info, FileText, Phone, LogIn
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/images/qs_logo_small.png';
import qs_name_nobg from '../../assets/images/qs_name_nobg.png';

// Updated NavLink component with darker text and reduced shadows
const NavLink = ({ title, icon, to, isButton }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to === '/' && location.pathname === '/');

    if (isButton) {
        return (
            <Link
                to={to}
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                style={{
                    boxShadow: '0 2px 8px -2px rgba(59, 130, 246, 0.3)'
                }}
            >
                {icon}
                <span className="ml-1">{title}</span>
            </Link>
        );
    }

    return (
        <Link
            to={to}
            className={`
                flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium
                ${isActive
                ? 'text-blue-600 bg-blue-50 shadow-sm'
                : 'text-black-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 hover:shadow-sm'
            }
            `}
        >
            {icon}
            <span>{title}</span>
        </Link>
    );
};

// Updated MobileNavLink component
const MobileNavLink = ({ title, icon, to, isButton, onClick }) => {
    if (isButton) {
        return (
            <Link
                to={to}
                onClick={onClick}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md"
            >
                {icon && icon}
                <span>{title}</span>
            </Link>
        );
    }

    return (
        <Link
            to={to}
            onClick={onClick}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 hover:shadow-sm"
        >
            {icon && icon}
            <span>{title}</span>
        </Link>
    );
};

// Updated DropdownItem component
const DropdownItem = ({ title, description, to, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="block w-full text-left px-4 py-3 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 transition-all duration-300 rounded-lg mx-2 mb-1"
    >
        <div className="font-medium text-sm text-gray-900 dark:text-white">{title}</div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{description}</div>
    </Link>
);

const Header = ({ activeSection }) => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        modules: false
    });

    // Create ref for modules dropdown
    const modulesRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDropdown = (menu) => {
        setDropdownOpen({
            modules: menu === 'modules' ? !dropdownOpen.modules : false
        });
    };

    const closeDropdowns = () => {
        setDropdownOpen({ modules: false });
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        closeDropdowns();
    };

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modulesRef.current && !modulesRef.current.contains(event.target)) {
                setDropdownOpen(prev => ({...prev, modules: false}));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
            darkMode
                ? 'bg-gray-900/95 shadow-gray-900/20'
                : 'bg-white/95 shadow-gray-200/30'
        }`} style={{
            boxShadow: darkMode
                ? '0 4px 16px -4px rgba(0, 0, 0, 0.2)'
                : '0 4px 16px -4px rgba(0, 0, 0, 0.1)'
        }}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo - No background */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="flex items-center space-x-2 transition-transform duration-300 group-hover:scale-105">
                            <span className="h-8 w-8 flex items-center">
                                <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
                            </span>
                            <span className="h-6 flex items-center">
                                <img src={qs_name_nobg} alt="QuantaSight" className="h-full w-auto object-contain" />
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-2">
                        <NavLink
                            title="Home"
                            icon={<Home size={16} />}
                            to="/"
                        />
                        <NavLink
                            title="About"
                            icon={<Info size={16} />}
                            to="/about"
                        />

                        {/* Modules Dropdown */}
                        <div className="relative" ref={modulesRef}>
                            <button
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                                    activeSection === 'modules'
                                        ? 'text-blue-600 bg-blue-50 shadow-sm'
                                        : 'text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 hover:shadow-sm'
                                }`}
                                onClick={() => toggleDropdown('modules')}
                            >
                                <span>Modules</span>
                                <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen.modules ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen.modules && (
                                <div className={`absolute left-0 mt-2 w-72 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 transform ${
                                    darkMode
                                        ? 'bg-gray-800/95 border-gray-700'
                                        : 'bg-white/95 border-gray-200/50'
                                }`} style={{
                                    boxShadow: darkMode
                                        ? '0 8px 20px -6px rgba(0, 0, 0, 0.25)'
                                        : '0 8px 20px -6px rgba(0, 0, 0, 0.15)'
                                }}>
                                    <div className="py-2">
                                        <DropdownItem
                                            title="Xtract"
                                            description="Scientific research & AI summarization"
                                            to="/xtract"
                                            onClick={closeDropdowns}
                                        />
                                        <DropdownItem
                                            title="Atlas"
                                            description="Agentic AI query monitoring"
                                            to="/atlas"
                                            onClick={closeDropdowns}
                                        />
                                        <DropdownItem
                                            title="Workroom"
                                            description="Team collaboration & content sharing"
                                            to="/workroom"
                                            onClick={closeDropdowns}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink
                            title="Blogs"
                            icon={<FileText size={16} />}
                            to="/blogs"
                        />
                        <NavLink
                            title="Request Demo"
                            icon={<Phone size={16} />}
                            to="/demo"
                            isButton={true}
                        />
                        <NavLink
                            title="Login"
                            icon={<LogIn size={16} />}
                            to="/login"
                        />
                    </nav>

                    {/* Dark Mode Toggle & Mobile Menu Button */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg transition-all duration-300 ${
                                darkMode
                                    ? 'hover:bg-blue-500/20 text-gray-300 hover:text-blue-400'
                                    : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                            } hover:shadow-sm`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                                darkMode
                                    ? 'hover:bg-blue-500/20 text-gray-300 hover:text-blue-400'
                                    : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                            } hover:shadow-sm`}
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
                <div className={`lg:hidden border-t backdrop-blur-md transition-all duration-300 ${
                    darkMode
                        ? 'bg-gray-900/95 border-gray-700'
                        : 'bg-white/95 border-gray-200/50'
                }`}>
                    <div className="container mx-auto px-4 py-6">
                        <nav className="flex flex-col space-y-2">
                            <MobileNavLink
                                title="Home"
                                icon={<Home size={18} />}
                                to="/"
                                onClick={closeMobileMenu}
                            />
                            <MobileNavLink
                                title="About"
                                icon={<Info size={18} />}
                                to="/about"
                                onClick={closeMobileMenu}
                            />

                            {/* Mobile Modules Dropdown */}
                            <div className={`rounded-lg ${
                                dropdownOpen.modules
                                    ? (darkMode ? 'bg-blue-500/10' : 'bg-blue-50/50')
                                    : ''
                            }`}>
                                <button
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/10"
                                    onClick={() => toggleDropdown('modules')}
                                >
                                    <span>Modules</span>
                                    <ChevronDown size={18} className={`transition-transform duration-300 ${dropdownOpen.modules ? 'rotate-180' : ''}`} />
                                </button>

                                {dropdownOpen.modules && (
                                    <div className="pl-4 pb-2 space-y-1">
                                        <MobileNavLink
                                            title="Xtract"
                                            to="/xtract"
                                            onClick={closeMobileMenu}
                                        />
                                        <MobileNavLink
                                            title="Atlas"
                                            to="/atlas"
                                            onClick={closeMobileMenu}
                                        />
                                        <MobileNavLink
                                            title="Workroom"
                                            to="/workroom"
                                            onClick={closeMobileMenu}
                                        />
                                    </div>
                                )}
                            </div>

                            <MobileNavLink
                                title="Blogs"
                                icon={<FileText size={18} />}
                                to="/blogs"
                                onClick={closeMobileMenu}
                            />
                            <MobileNavLink
                                title="Request Demo"
                                icon={<Phone size={18} />}
                                to="/demo"
                                onClick={closeMobileMenu}
                                isButton={true}
                            />
                            <MobileNavLink
                                title="Login"
                                icon={<LogIn size={18} />}
                                to="/login"
                                onClick={closeMobileMenu}
                            />
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;