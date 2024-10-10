import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/home.css";
import "../css/site.css";

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return (
        <div className={`container-fluid ${isMobile ? 'mobile' : ''}`}>
            <Header />
            <main className="home-container home-content"></main>
            <Footer />
        </div>
    );
};

export default Home;