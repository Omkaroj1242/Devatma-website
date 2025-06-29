import React from "react";
import { FaLeaf, FaHandsHelping, FaHeart, FaUsers } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <header
                className="about-header"
                style={{
                    backgroundImage: "url('../src/images/about-hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    color: "#fff",
                    textAlign: "center",
                    padding: "4rem 2rem",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                    }}
                ></div>
                <div style={{ position: "relative", zIndex: 2 }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
                        About Devatma Meditation
                    </h1>
                    <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                        Discover the path to inner peace and self-realization.
                    </p>
                </div>
            </header>

            {/* Content Section */}
            <section className="about-content" style={{ padding: "2rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
                <div className="about-section" style={{ marginBottom: "2rem" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Our Mission</h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        At Devatma Meditation, our mission is to guide individuals on their journey to mindfulness,
                        self-awareness, and spiritual growth. We believe in the transformative power of meditation to
                        bring harmony to the mind, body, and soul.
                    </p>
                </div>

                <div className="about-section" style={{ marginBottom: "2rem" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>What We Offer</h2>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <FaLeaf style={{ fontSize: "1.5rem", color: "#1e3c72", marginRight: "1rem" }} />
                            Guided meditation sessions
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <FaHandsHelping style={{ fontSize: "1.5rem", color: "#1e3c72", marginRight: "1rem" }} />
                            Workshops on mindfulness and self-care
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <FaHeart style={{ fontSize: "1.5rem", color: "#1e3c72", marginRight: "1rem" }} />
                            Personalized meditation plans
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                            <FaUsers style={{ fontSize: "1.5rem", color: "#1e3c72", marginRight: "1rem" }} />
                            Community support and events
                        </li>
                    </ul>
                </div>

                <div className="about-section" style={{ marginBottom: "2rem" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Why Choose Us?</h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        Our experienced instructors and serene environment provide the perfect setting for your
                        meditation practice. Whether you're a beginner or an experienced meditator, we are here to
                        support your journey.
                    </p>
                </div>
            </section>

            {/* Footer Section */}
            <footer
                className="about-footer"
                style={{
                    background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                    color: "#fff",
                    textAlign: "center",
                    padding: "2rem 1rem",
                }}
            >
                <p style={{ fontSize: "1.2rem", margin: 0 }}>
                    Join us and start your journey to a more peaceful and fulfilling life.
                </p>
            </footer>
        </div>
    );
};

export default AboutPage;