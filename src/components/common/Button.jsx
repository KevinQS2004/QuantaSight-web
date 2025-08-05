import React from 'react';
import { Link } from 'react-router-dom';

export const PrimaryButton = ({ children, onClick, to, fullWidth = false }) => {
    const baseClasses = `px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium ${
        fullWidth ? 'w-full' : ''
    }`;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={baseClasses}
        >
            {children}
        </button>
    );
};

export const SecondaryButton = ({ children, onClick, to, darkMode, fullWidth = false }) => {
    const baseClasses = `px-6 py-3 rounded-lg font-medium ${
        darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'
    } transition-colors ${fullWidth ? 'w-full' : ''}`;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={baseClasses}
        >
            {children}
        </button>
    );
};

export const FormButton = ({ text, type = "submit", to, fullWidth = false }) => {
    const baseClasses = `px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transform transition-all duration-200 ${
        fullWidth ? 'w-full' : ''
    }`;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={baseClasses}
        >
            {text}
        </button>
    );
};