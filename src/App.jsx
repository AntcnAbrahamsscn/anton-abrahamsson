import React, { useEffect } from "react";

import "./index.css";
import "./stylesheets/global.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Case from "./components/Case";

function App() {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Case />
        </div>
    );
}

export default App;
