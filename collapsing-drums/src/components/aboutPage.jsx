import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/site.css";
import Header from "./header";
import Footer from "./footer";
import "../css/aboutPage.css";

// Test comment
const About = () => {

    const navigate = useNavigate();

    const handleMerchClick = () => {
        navigate("/merch");
    };

    return(
        <div className="body container-fluid">
            <Header />

            {/* Mission */}
            <div className="row topbar">
                <div className="missionStmt col-sm-12 col-md-6">
                    <h1>
                        <b>Unleashing rhythm to connect and inspire</b>
                    </h1>
                    <h2>
                    Our mission is to blend innovative rhythms, 
                    eclectic influences, and powerful storytelling, inviting listeners 
                    to embark on a sonic journey that transcends the ordinary. 
                    </h2>
                </div>
                <div className="missionImg col-md-4">
                    <img className="cdImg" src="/img/About CD.png" alt="cd graphic"></img>
                </div>
            </div>

            {/* Strategy & Shop */}
            <div className="row midbar">

                <div className="row">
                    <h1 style={{color: 'black'}}>
                        <b>Our Strategy</b>
                    </h1>
                </div>

                <div className="row strat">
                    <h2 style={{color: 'black'}}>
                        At <b>Collapsing Drums</b>, we believe in the power of music to connect people, tell stories, and create lasting memories. 
                        <br></br>
                        Our strategy is centered around three core pillars that drive everything we do: 
                        <br></br>
                        <b>Performing, Merchandising, and Engaging with our Fans.</b>
                    </h2>
                </div>

                <div className= "row">
                    <div className="shopCol col-sm-12 col-md-3 col-lg-3">
                        <img className="shopButton merch" src="/img/Shop Merch.png" alt="Shop Merch Button" onClick={handleMerchClick}></img>
                    </div>
                    <div className="shopCol col-sm-12 col-md-3 col-lg-3">
                        <img className="shopButton ticket" src="/img/Shop Tickets.png" alt="Shop Ticket Button"></img>
                    </div>
                    <div className="shopCol col-sm-12 col-md-3 col-lg-3">
                        <img className="shopButton music" src="/img/Stream Music.png" alt="Stream Music Button"></img>
                    </div>
                </div>
            </div>

            {/* Meet the Execs */}
            <div className="row bottombar">

                <div className="row">
                    <h1>
                        <b>Meet the Executives</b>
                    </h1>
                </div>

                <div className="row">
                        <div className="exec col-12 mb-3">
                            <div className="exec-content">
                                <div className="exec-header">
                                    <img className="headshot rounded-circle" src="/img/Muskan Shergill.jpg" alt="Muskan's Headshot" />
                                    <h2 className="name">Muskan Shergill</h2>
                                </div>
                                <div className="exec-experience">
                                    <p className="experience">Muskan is a Computer Science & Engineering major with a minor in Studio Art from The Ohio State University.
                                        Her current experience involves interning at KeyBank for 2 summers as a ServiceNow Software Developer Intern and then a Service Account Governance Intern.
                                        Some key project work include building a monogame remake of Super Mario Bros 3, building a cybersecurity compliance application for Ohio water plants, and 
                                        creating an animated short <i>Subway Rat</i>. This strong background in agile project work, the creative arts, and security is the perfect mix
                                        needed to manage the <i>Collapsing Drums</i> website.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="exec col-12 mb-3">
                            <div className="exec-content">
                                <div className="exec-header">
                                    <img className="headshot rounded-circle" src="/img/placeholder.png" alt="Drishti's Headshot" />
                                    <h2 className="name">Drishti Mittal</h2>
                                </div>
                                <div className="exec-experience">
                                    <p className="experience">INSERT EXPERIENCE</p>
                                </div>
                            </div>
                        </div>
                        <div className="exec col-12 mb-3">
                            <div className="exec-content">
                                <div className="exec-header">
                                    <img className="headshot rounded-circle" src="/img/Khushi Patel.png" alt="Khushi's Headshot" />
                                    <h2 className="name">Khushi Patel</h2>
                                </div>
                                <div className="exec-experience">
                                    <p className="experience"> Khushi is a Computer Science & Engineering major with a minor in Mathematics from The Ohio State University. 
                                    Her experience includes working as a Data Science Intern at Keva Health, where she improved website engagement through SEO strategies and project optimization, 
                                    and as a Repair Technician at OSU's TechHub, specializing in efficient Apple and Dell laptop repairs. 
                                    Some key achievements include leading a team to enhance a health-tech website, developing over 50 technical repairs with a 95% success rate, 
                                    and exploring entrepreneurial growth during her SWE Fellowship at HeadStarter AI. 
                                    This strong background in data-driven decision-making, technical problem-solving, and teamwork makes her the perfect fit to manage innovative projects like the Collapsing Drums website.</p>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default About;
