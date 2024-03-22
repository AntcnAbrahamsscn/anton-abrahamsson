import React, { useEffect } from "react";

import "./index.css";
// import "./stylesheets/global.css";
import "./stylesheets/media-queries.css";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Case from "./components/Case";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Case />
            <AboutMe />
            <Footer />
        </div>
    );
}

export default App;
