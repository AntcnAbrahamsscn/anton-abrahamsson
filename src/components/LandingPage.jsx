import React from "react";
import antonImage from "../assets/frontpage-img.png";
import '../stylesheets/landing-page.css'

export default function LandingPage() {
    return (
        <div className="grid landing-page">
            <div className="welcome-text">
                <h2>
                    <span className="span-fp-style"> Hi! I'm Anton.</span>{" "}
                </h2>
                <h2>
                    {" "}
                    Code-craving frontend student with a bachelor in Media. Welcome to my portfolio - I hope you like it!
                    
                </h2>
            </div>
            <div className="welcome-img">
                <img src={antonImage} alt="Image of me myself Anton Abrahamsson" />
            </div>
        </div>
    );
}
