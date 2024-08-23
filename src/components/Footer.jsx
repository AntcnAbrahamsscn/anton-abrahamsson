import React from "react";
import "../stylesheets/footer.css";

export default function Footer() {
    return (
        <div className="grid">
            <div className="footer-flex">
                <div className="left-text-footer">
                    <p>Anton Abrahamsson</p>
                    <p>abrahamsson37@gmail.com</p>
                </div>
                <div className="social-footer-container">
                    <p className="divider">
                        <span>Social</span>
                    </p>

                    <div className="social-row">
                       <a href="https://www.linkedin.com/in/anton-abrahamsson-1213b9b6/"> <i className="fa-brands fa-linkedin social-color"></i></a>
                       <a href="https://github.com/AntcnAbrahamsscn"> <i className="fa-brands fa-github social-color"></i></a>
                       <a href="https://www.instagram.com/anton_abrahamsson/"> <i className="fa-brands fa-instagram social-color"></i></a>
                       <a href="https://open.spotify.com/user/3123y3p2kyofnzsu32mz5s7eft3m?si=e9a5d711aa314972"> <i className="fa-brands fa-spotify"></i></a>
                    </div>
                </div>
                <div className="right-text-footer">
                    <p>Student @ NBI/ Handelsakademin</p>
                    <p>
                    Music by <a href="https://pixabay.com/users/soulprodmusic-30064790/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=233993">Oleg Fedak</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=233993">Pixabay</a>
                    </p>{" "}
                </div>
            </div>
        </div>
    );
}
