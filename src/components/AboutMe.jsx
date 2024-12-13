import React from "react";
import { useFadeIn } from "../scripts/useFadeIn";
import "../stylesheets/about-me.css";

export default function AboutMe() {
    const sectionRef = useFadeIn();

    return (
        <section id="about-me" className="grid fade-in" ref={sectionRef}>
            <div className="contact-styling">
                <h3>about me</h3>
                <p className="leading">
                    My name is Anton Abrahamsson and I'm a 28 years old Front-end
                    student who loves snowboarding and watching bushcraft videos
                    on YouTube. Two years ago, I completed my Bachelor's degree
                    in Media and Communication with a specialization in Visual
                    Communication and Design at Karlstad University. Since
                    graduation, I have been working as a print editor at Göteborgs-Posten and Nya Wermlands-Tidningen
                   .
                </p>
                <p className="leading">
                    In addition, last fall I started my journey into Front-end
                    studies, motivated by my interest in web development and
                    programming. My goal is to merge the skills I acquire in
                    frontend development with my background in media, forming an
                    expertise that I am eager to contribute to my future
                    workplace. Currently, I am searching for a workplace to
                    have my second internship for the period of 2025-03-17 - 2025-06-06.
                </p>
            </div>
        </section>
    );
}
