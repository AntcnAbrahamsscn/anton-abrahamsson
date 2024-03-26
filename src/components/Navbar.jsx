import React, { useState, useEffect, useRef } from "react";
import DarkMode from "./DarkMode";
import MusicButton from "./MusicButton";
import "../stylesheets/navbar.css";

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

    return (
        <nav className="site-nav grid">
            <h1><a href="#landing-page">abra.</a></h1>
            <ul>
                <li className={activeLink === "case-section" ? "active" : ""}>
                    <a href="#case-section">
                        {activeLink === "case-section" ? "/case" : "case"}
                    </a>
                </li>
                <li className={activeLink === "about-me" ? "active" : ""}>
                    <a href="#about-me">
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