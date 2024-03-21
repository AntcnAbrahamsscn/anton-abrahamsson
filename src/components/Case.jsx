import { useState } from "react";
import hollowImage from "../assets/hollow_logo_waves.png";
import terraImage from "../assets/terra-protein-package.jpg";
import hangbot2Image from "../assets/hangbot.4.png";
import svenskaBinImage from "../assets/svenska-bin-gif.gif"
import "../stylesheets/case.css";

const items = [
    { img: svenskaBinImage, header: "Svenska bin", text: "Photoshop | Figma " },
    { img: terraImage, header: "Terra insect protein", text: "blablabla" },
    {
        img: hollowImage,
        header: "Hollow - Surf apereals",
        text: "Figma | Photoshop | Illustrator ",
    },
    { img: hangbot2Image, header: "Hangbot the game", text: "blablabla" },
];

// TODO: Kolla över alla sections/ divs.

export default function Case() {
    const [active, setActive] = useState(0);
    const handleToggle = (index) => setActive(index);
    return (
        <div className="grid">
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
                            <div className="content">
                                <span className="material-symbols-outlined"></span>
                                <div>
                                    <h2>{item.header}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}
