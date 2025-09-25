import React, { useState } from "react";
import styles from "./About.module.css";
import data from "../../../data.json";

const About = () => {
    const paragraphs = data.about.split('\n\n');
    const [showAll, setShowAll] = useState(false);

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowAll((prev) => !prev);
    };

    return (
        <div id="about" className={styles.AboutWrapper}>
            <h1>About Us</h1>
            {!showAll ? (
                <p>
                    {paragraphs[0]}
                    {paragraphs.length > 1 && (
                        <>
                            ...{" "}
                            <a
                                href="#"
                                className={styles.showMoreLink}
                                onClick={handleToggle}
                            >
                                Show more
                            </a>
                        </>
                    )}
                </p>
            ) : (
                <>
                    {paragraphs.map((para, idx) => (
                        <p key={idx}>
                            {para}
                            {idx === paragraphs.length - 1 && (
                                <>
                                    {" "}
                                    <a
                                        href="#"
                                        className={styles.showMoreLink}
                                        onClick={handleToggle}
                                    >
                                        Show less
                                    </a>
                                </>
                            )}
                        </p>
                    ))}
                </>
            )}
        </div>
    );
};

export default About;
