// import React, { useEffect, useRef } from "react";
import { useEffect, useState } from "react";
import antonImage from "../assets/anton-fri-prof.png";
import "../stylesheets/landing-page.css";


export default function LandingPage() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.querySelector("body").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <section id="landing-page" className="grid landing-page" >
            <div className="welcome-text">
                <h2 className="span-fp-style"  onClick={toggleTheme}>


                     Hi, I'm Anton!
                </h2>
                <p>
                    {" "}
                    Front-end student with a bachelor's degree in Media and Communication. Welcome to my portfolio!
                </p>
            </div>
            <div className="welcome-img">
                <img src={antonImage} alt="Image of me myself Anton Abrahamsson" />
            </div>
        </section>
    );
}