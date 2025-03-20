import React from 'react';

export const NavLink = ({ title, icon, active, onClick, isButton }) => (
    <button
        onClick={onClick}
        className={`
      flex items-center space-x-1 px-3 py-2 rounded-md transition-colors
      ${isButton ? 'bg-blue-600 hover:bg-blue-700 text-white' : active ? 'text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
    `}
    >
        {icon}
        <span>{title}</span>
    </button>
);

export const MobileNavLink = ({ title, icon, onClick, isButton }) => (
    <button
        onClick={onClick}
        className={`
      flex items-center space-x-2 px-4 py-2 rounded-md transition-colors w-full
      ${isButton ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
    `}
    >
        {icon && icon}
        <span>{title}</span>
    </button>
);

export const DropdownItem = ({ title, description, onClick }) => (
    <button
        onClick={onClick}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
    </button>
);

export const FooterLinkGroup = ({ title, children }) => (
    <div>
        <h3 className="font-medium mb-2">{title}</h3>
        <ul className="space-y-1">{children}</ul>
    </div>
);

export const FooterLink = ({ title, onClick }) => (
    <li>
        <button
            onClick={onClick}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
        >
            {title}
        </button>
    </li>
);

export default NavLink;