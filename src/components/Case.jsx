import { useState, useEffect, useRef } from "react";
import { useFadeIn } from "../scripts/useFadeIn";
import {items} from './../data/item-list'
import "../stylesheets/case.css";

export default function Case() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [textVisibility, setTextVisibility] = useState(Array(items.length).fill(false));

    const sectionRef = useFadeIn();

    const handleToggle = (index) => {
        setActiveIndex(index);
    };

    const toggleParagraphVisibility = (index) => {
        setTextVisibility((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section id="case-section" className="grid fade-in" ref={sectionRef}>
            <h3 className="case-header">case</h3>
            <div className="image-accordion">
                {items.map((item, index) => (
                    <article
                        key={item.img}
                        className={`image-accordion-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => handleToggle(index)}
                    >
                        <img src={item.img} alt={item.header} />
                        <div className="content">
                            <h2 className="white-color">{item.header}</h2>
                            <div className={`text-container ${textVisibility[index] ? "expanded" : ""}`}>
                                <p className="white-color description">
                                    {item.text}
                                </p>
                            </div>
                            <p className="item-skills white-color">{item.skills}</p>
                            <div className="button-container">
                                <button
                                    className="read-more-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleParagraphVisibility(index);
                                    }}
                                >
                                    {textVisibility[index] ? "close" : "about"}
                                </button>
                                <a href={item.url} className="read-more-btn play-button">
                                    visit
                                </a>
                                {item.ghUrl && (
                                    <a href={item.ghUrl} className="read-more-btn play-button">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}