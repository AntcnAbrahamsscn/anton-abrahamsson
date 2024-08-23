// Components
import { useState, useEffect } from "react";
import BackgroundSong from "../assets/rainy-day-233993.mp3";

// Stylesheets
import "../stylesheets/music-button.css";

export default function MusicButton() {
    const [audio] = useState(new Audio(BackgroundSong));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying, audio]);

    function handleToggle() {
        setIsPlaying(!isPlaying);
    }

    return (
        <button onClick={handleToggle}>
            {isPlaying ? (
                <i className="fa-solid fa-volume-off"></i>
            ) : (
                <i className="fa-solid fa-volume-high"></i>
            )}
        </button>
    );
}
