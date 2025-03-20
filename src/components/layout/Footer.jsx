import React from 'react';
import { Brain } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { FooterLinkGroup, FooterLink } from '../common/Navigation';
import logo from "../../assets/images/qs_logo_small.png";
import qs_name_nobg from "../../assets/images/qs_name_nobg.png";

const Footer = ({ setActiveSection }) => {
    const { darkMode } = useTheme();

    return (
        <footer className={`mt-12 py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
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
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Next-generation natural language solutions<br/>for pharmaceutical and life sciences
                            industries
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <FooterLinkGroup title="Company">
                            <FooterLink title="About Us" onClick={() => setActiveSection('about')}/>
                            <FooterLink title="Careers" onClick={() => {
                            }}/>
                            <FooterLink title="Contact" onClick={() => {
                            }}/>
                            <FooterLink title="ISO Certification" onClick={() => {
                            }}/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Products">
                            <FooterLink title="Xtract" onClick={() => setActiveSection('xtract')}/>
                            <FooterLink title="Atlas" onClick={() => setActiveSection('atlas')}/>
                            <FooterLink title="Workroom" onClick={() => setActiveSection('workroom')}/>
                            <FooterLink title="CRM Dashboard" onClick={() => {
                            }}/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Resources">
                            <FooterLink title="Blog" onClick={() => setActiveSection('blogs')}/>
                            <FooterLink title="Documentation" onClick={() => {
                            }}/>
                            <FooterLink title="Tutorials" onClick={() => {
                            }}/>
                            <FooterLink title="Case Studies" onClick={() => {
                            }}/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Legal">
                            <FooterLink title="Privacy Policy" onClick={() => {
                            }}/>
                            <FooterLink title="Terms of Service" onClick={() => {
                            }}/>
                            <FooterLink title="Cookie Policy" onClick={() => {
                            }}/>
                            <FooterLink title="GDPR" onClick={() => {
                            }}/>
                        </FooterLinkGroup>
                    </div>
                </div>

                <div
                    className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} QuantaSight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;