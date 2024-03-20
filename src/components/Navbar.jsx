import React from "react";
import SwitchTheme from "./SwitchTheme";

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
                   <a href=""> <SwitchTheme theme={theme} switchTheme={switchTheme} /></a>
                </li>
            </ul>
        </nav>
    );
}
