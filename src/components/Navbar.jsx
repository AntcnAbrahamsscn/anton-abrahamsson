import React from "react";
// import SwitchTheme from "./SwitchTheme";
import DarkMode from "./DarkMode";

export default function Navbar({theme, switchTheme}) {
    return (
        <nav className="site-nav grid hidden">
            <h1>abra.</h1>
            <ul>
                <li className="active">
                    <a href="#portfolio">case</a>
                </li>
                <li className="active">
                    <a href="#contact">about</a>
                </li>
                <li className="active">
                   <a href=""> <DarkMode /></a>
                </li>
            </ul>
        </nav>
    );
}
