import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";

import "./index.css";
import "./stylesheets/global.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

// Import the image

function App() {
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <body>
            <header>
                <Navbar theme={theme} switchTheme={switchTheme} />
            </header>
            <LandingPage />
            
        </body>
    );
}

export default App;
