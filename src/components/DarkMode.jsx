import React, { useState, useEffect } from 'react';
import '../stylesheets/dark-mode.css';

export default function DarkMode() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.querySelector('body').setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div>
            <input
                type="checkbox"
                onChange={toggleTheme}
                className="dark-mode-input"
                id="darkmode-toggle"
                style={{ display: 'none' }}
                checked={theme === 'dark'}
            />
            <label
                className="dark-mode-label"
                htmlFor="darkmode-toggle"
            >
                <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
            </label>
        </div>
    );
}