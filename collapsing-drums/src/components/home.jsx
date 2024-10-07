import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/home.css";
import "../css/site.css";
import homeImage from '../assets/HomePage.png'; 
import collapsingDrums from '../assets/CollapsingDrums.png';

const Home = () => {
    return (
        <div className="home-container container-fluid" style={{ backgroundImage: `url(${homeImage})` }}>
            <Header />
            <div className="title" style={{ backgroundImage: `url(${collapsingDrums})` }}></div>
            <Footer />
        </div>
    );
};

export default Home;
