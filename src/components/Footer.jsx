import React from "react";
import "../stylesheets/footer.css";

export default function Footer() {
    return (
        <div className="grid">
            <div className="footer-flex">
                <div className="left-text-footer">
                    <p>Anton Abrahamsson</p>
                    <p>Student @ NBI Handelseakademin</p>
                </div>
                <div className="social-footer-container">
                    <p className="divider">
                        <span>Social</span>
                    </p>

                    <div className="social-row">
                        <i className="fa-brands fa-instagram social-color"></i>
                        <i className="fa-brands fa-github social-color"></i>
                        <i className="fa-brands fa-linkedin social-color"></i>
                        <i className="fa-brands fa-steam social-color"></i>
                    </div>
                </div>
                <div className="right-text-footer">
                    <p>abrahamsson37@gmail.com</p>
                    <p>
                        Music by{" "}
                        <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">
                            FASSounds
                        </a>{" "}
                        from{" "}
                        <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">
                            Pixabay
                        </a>{" "}
                    </p>{" "}
                </div>
            </div>
        </div>
    );
}
10;
