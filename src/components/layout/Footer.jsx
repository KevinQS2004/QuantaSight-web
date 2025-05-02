import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import logo from "../../assets/images/qs_logo_small.png";
import qs_name_nobg from "../../assets/images/qs_name_nobg.png";

// Improved Footer Link Group Component
const FooterLinkGroup = ({ title, children }) => {
    const { darkMode } = useTheme();

    return (
        <div>
            <h3 className={`font-semibold mb-3 text-sm uppercase tracking-wider ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
                {title}
            </h3>
            <ul className="space-y-2">
                {children}
            </ul>
        </div>
    );
};

// Improved Footer Link Component
const FooterLink = ({ title, onClick }) => {
    const { darkMode } = useTheme();

    return (
        <li>
            <button
                onClick={onClick}
                className={`text-sm transition-colors hover:underline ${
                    darkMode
                        ? 'text-gray-400 hover:text-blue-300'
                        : 'text-gray-600 hover:text-blue-600'
                }`}
            >
                {title}
            </button>
        </li>
    );
};

const Footer = ({ setActiveSection }) => {
    const { darkMode } = useTheme();

    return (
        <footer className={`mt-12 py-8 ${
            darkMode
                ? 'bg-gray-900 border-gray-700'
                : 'bg-gray-50 border-gray-200'
        } border-t`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center space-x-2">
                            <span className="h-10 w-10 flex items-center">
                                <img src={logo} alt="Logo" className="h-full w-auto object-contain"/>
                            </span>
                            <span className="h-8 flex items-center">
                                <img src={qs_name_nobg} alt="QuantaSight" className="h-full w-auto object-contain"/>
                            </span>
                        </div>
                        <p className={`mt-2 text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            Next-generation natural language solutions<br/>for pharmaceutical and life sciences
                            industries
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <FooterLinkGroup title="Company">
                            <FooterLink title="About Us" onClick={() => setActiveSection('about')}/>
                            <FooterLink title="Careers" onClick={() => {}}/>
                            <FooterLink title="Contact" onClick={() => {}}/>
                            <FooterLink title="ISO Certification" onClick={() => {}}/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Products">
                            <FooterLink title="Xtract" onClick={() => setActiveSection('xtract')}/>
                            <FooterLink title="Atlas" onClick={() => setActiveSection('atlas')}/>
                            <FooterLink title="Workroom" onClick={() => setActiveSection('workroom')}/>
                            <FooterLink title="CRM Dashboard" onClick={() => {}}/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Resources">
                            <FooterLink title="Blog" onClick={() => setActiveSection('blogs')}/>
                            <FooterLink title="Documentation" onClick={() => {}}/>
                            <FooterLink title="Tutorials" onClick={() => {}}/>
                            <FooterLink title="Case Studies" onClick={() => {}}/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Legal">
                            <FooterLink title="Privacy Policy" onClick={() => {}}/>
                            <FooterLink title="Terms of Service" onClick={() => {}}/>
                            <FooterLink title="Cookie Policy" onClick={() => {}}/>
                            <FooterLink title="GDPR" onClick={() => {}}/>
                        </FooterLinkGroup>
                    </div>
                </div>

                <div className={`mt-8 pt-8 border-t text-center text-sm ${
                    darkMode
                        ? 'border-gray-700 text-gray-400'
                        : 'border-gray-200 text-gray-600'
                }`}>
                    <p>© {new Date().getFullYear()} QuantaSight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;