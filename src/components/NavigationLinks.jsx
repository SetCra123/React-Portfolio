import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationLinks() {
    const currentPage = useLocation().pathname;

    const links = [
        { path: '/', label: 'Home' },
        { path: '/Portfolio', label: 'Portfolio' },
        { path: '/Resume', label: 'Resume' },
        { path: '/Contact', label: 'Contact' }
    ];

    return links.map((link) => (
        <div key={link.path} className="nav-item">
            <Link
                to={link.path}
                className={currentPage === link.path ? 'nav-link active' : 'nav-link'}
            >
                {link.label}
            </Link>
        </div>
    ));
}

export default NavigationLinks;