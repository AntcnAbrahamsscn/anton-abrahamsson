import { useState } from "react";
// import hollowImage from "../assets/hollow_logo_waves.png";
// import terraImage from "../assets/terra-protein-package.jpg";
import hangbotImage from "../assets/hangbot-cover.png";
import pokemonImage from "../assets/pokemon-cover.png"
import "../stylesheets/case.css";

const items = [
    { img: hangbotImage, header: "Hangbot the game", text: "Hangbot is a project developed by me and two other students for a school assignment. Our objective was to create a hangman game using HTML, CSS, and JS. The game features an list of over 18,000 random Swedish words. To add a competitive edge, we implemented a high score list that stores data using local storage", url:"https://wanderingkitty.github.io/BionicCriminals/" },
    { img: pokemonImage, header: "Pokémon Team Manager", text: "Pokémon Team Manager is an individual school project. My task was to use the pokeapi.com API and create a Pokémon management game. The objective was to enable users to search for Pokémon, add them to their team, and have the option to move them to a reserve list.", url:"https://antcnabrahamsscn.github.io/pok--team-manager/#" },
];

// TODO: Kolla över alla sections/ divs.
export default function Case() {
    const [active, setActive] = useState(0);
    const handleToggle = (index) => setActive(index);
    return (
        <section className="grid">
            <h3 className="case-header">Case</h3>
            <section className="image-accordion " id="case">
                {items.map((item, index) => {
                    const isActive = active === index ? "active" : "";
                    return (
                        
                        <article
                            key={item.img}
                            className={`image-accordation-item ${isActive}`}
                            onClick={() => handleToggle(index)}
                        >
                            <img src={item.img} />
                            <a href={item.url}>
                            <div className="content">
                                <div>
                                    <h2 className="white-color">{item.header}</h2>
                                    <p className="white-color">{item.text}</p>
                                </div>
                            </div>
                            </a>
                        </article>
                    );
                })}
            </section>
        </section>
    );
}
