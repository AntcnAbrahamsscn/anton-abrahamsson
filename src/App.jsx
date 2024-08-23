import React, { useEffect, useState } from "react";
import "./index.css";
import "./stylesheets/media-queries.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Case from "./components/Case";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
    const [showSections, setShowSections] = useState(false);

    useEffect(() => {
        // Show sections with a delay when the component mounts
        const timeoutId = setTimeout(() => {
            setShowSections(true);
        }, 500); 

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <Navbar />
            <LandingPage className={showSections ? "fade-in active" : "fade-in"} />
            <Case className={showSections ? "fade-in active" : "fade-in"} />
            <AboutMe className={showSections ? "fade-in active" : "fade-in"} />
            <Footer className={showSections ? "fade-in active" : "fade-in"} />
        </div>
    );
}

export default App;