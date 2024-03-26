import { useState } from "react";
import hangbotImage from "../assets/hangbot-cover.png";
import pokemonImage from "../assets/pokemon-cover.png";
import "../stylesheets/case.css";

const items = [
    {
        img: hangbotImage,
        header: "Hangbot the game",
        text: "Hangbot is a project developed by me and two other students for a school assignment. Our objective was to create a hangman game using HTML, CSS, and JS. The game features an list of over 18,000 random Swedish words. To add a competitive edge, we implemented a high score list that stores data using local storage.",
        url: "https://wanderingkitty.github.io/BionicCriminals/", ghUrl: "https://github.com/wanderingkitty/BionicCriminals"
    },
    {
        img: pokemonImage,
        header: "Pokémon Team Manager",
        text: "Pokémon Team Manager is an individual school project. My task was to use the pokeapi.com API and create a Pokémon management game. The objective was to enable users to search for Pokémon, add them to their team, and have the option to move them to a reserve list.",
        url: "https://antcnabrahamsscn.github.io/pok--team-manager/#",
        ghUrl: "https://github.com/AntcnAbrahamsscn/pok--team-manager"
    },
];

export default function Case() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [textVisibility, setTextVisibility] = useState(Array(items.length).fill(false));

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
        <section className="grid">
            <h3 className="case-header">Case</h3>
            <section className="image-accordion" id="case">
                {items.map((item, index) => (
                    <article
                        key={item.img}
                        className={`image-accordion-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => handleToggle(index)}
                    >
                        <img src={item.img} alt={item.header} />
                        <div className="content">
                            <h2 className="white-color">{item.header}</h2>
                            <p className={`white-color ${textVisibility[index] ? "visible" : "hidden"}`}>
                                {item.text}
                            </p>
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
                            <a href={item.ghUrl} className="read-more-btn play-button">{<i class="fa-brands fa-github"></i>}</a>
                            <a href={item.url} className="read-more-btn play-button">{<i class="fa-solid fa-play"></i>}</a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    );
}