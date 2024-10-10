import React from "react";
import {useNavigate} from "react-router-dom";
import "../css/footer.css";

const Footer = () => {

    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/shoppingcart");
    };

    const handleHomeClick = () => {
        navigate("/home");
    };
    
    const handleMerchClick = () => {
        navigate("/merch");
    };

    const handleAboutClick = () => {
        navigate("/aboutPage");
    };

    const handleContactClick = () => {
        navigate("/contactUs");
    };

    return (

        <div className="footer container-fluid">

            {/* Headings */}
            <div className="row">
                <h3 className="footerText">CSE 5234 ~ Collapsing Drums</h3>
            </div>
            <div className="row">
                <h3 className="footerText">Created by Muskan Shergill, Drishti Mittal, Khushi Patel</h3>
            </div>

            {/* Pages */}
            <div className="row">
                <div className="col-md-2">
                    <h4 className="footerText" onClick={handleHomeClick}>Home</h4>
                </div>
                <div className="col-md-2">
                    <h4 className="footerText" onClick={handleAboutClick}>About Us</h4>
                </div>
                <div className="col-md-2">
                    <h4 className="footerText" onClick={handleMerchClick}>Merch</h4>
                </div>
                <div className="col-md-2">
                    <h4 className="footerText">Tickets</h4>
                </div>
                <div className="col-md-2">
                    <h4 className="footerText">Music</h4>
                </div>
                <div className="col-md-2">
                    <h4 className="footerText" onClick={handleContactClick}>Contact Us</h4>
                </div>
            </div>

        </div>
    );
};

export default Footer;