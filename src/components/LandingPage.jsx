// import React, { useEffect, useRef } from "react";
import antonImage from "../assets/anton-fri-prof.png";
import "../stylesheets/landing-page.css";


export default function LandingPage() {



    return (
        <section id="landing-page" className="grid landing-page" >
            <div className="welcome-text">
                <h2 className="span-fp-style">
                     Hi, I'm Anton!
                </h2>
                <p>
                    {" "}
                    Frontend student with a bachelor in Media and Communication. Welcome to my portfolio - I hope you like it!
                </p>
            </div>
            <div className="welcome-img">
                <img src={antonImage} alt="Image of me myself Anton Abrahamsson" />
            </div>
        </section>
    );
}