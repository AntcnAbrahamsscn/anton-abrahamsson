import DarkMode from "./DarkMode";
import MusicButton from "./MusicButton";
import "../stylesheets/navbar.css";

export default function Navbar() {
    return (
        <nav className="site-nav grid">
            <h1>abra.</h1>
            <ul>
                <li>
                    <a href="#case">case</a>
                </li>
                <li>
                    <a href="#contact">about</a>
                </li>
                <div className="site-nav-settings">
                    <DarkMode />
                    <MusicButton />
                </div>
            </ul>
        </nav>
    );
}
