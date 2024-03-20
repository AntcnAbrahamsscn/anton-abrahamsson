import React from 'react'

import antonImage from "../assets/frontpage-img.png";


export default function LandingPage() {
  return (
    <section className="grid landing-page">
    <div className="welcome-text">
        <h2>
            28 years old Front-End student with a Media &
            Communication degree
        </h2>
    </div>
    <div className="welcome-img">
        <img src={antonImage} alt="Description" />
    </div>
</section>
  )
}
