import React, { useState, useEffect, useRef } from "react";
import DarkMode from "./DarkMode";
import MusicButton from "./MusicButton";
import "../stylesheets/navbar.css";

const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const observerRef = useRef(null);
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const targetId = entry.target.getAttribute("id");
                    if (entry.isIntersecting) {
                        setActiveLink(targetId);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section").forEach((section) => {
            observerRef.current.observe(section);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    // Function to handle link click
    const handleNavLinkClick = debounce((link) => {
        setActiveLink(link);
        const targetSection = document.getElementById(link);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 500); 

    return (
        <nav className="site-nav grid">
            <h1><a href="#landing-page">abra.</a></h1>
            <ul>
                <li className={activeLink === "case" ? "active" : ""}>
                    <a href="#case"
                        onClick={() => handleNavLinkClick("case")}
                        className={activeLink === "case" ? "bold" : ""}
                    >
                        {activeLink === "case" ? "/case" : "case"}
                    </a>
                </li>
                <li className={activeLink === "about-me" ? "active" : ""}>
                    <a href="#about-me"
                        onClick={() => handleNavLinkClick("about-me")}
                        className={activeLink === "about-me" ? "bold" : ""}
                    >
                        {activeLink === "about-me" ? "/about" : "about"}
                    </a>
                </li>
                <div className="site-nav-settings">
                    <DarkMode />
                    <MusicButton />
                </div>
            </ul>
        </nav>
    );
}