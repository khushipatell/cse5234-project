import React from "react";
import {useNavigate} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../css/header.css";

const Header = () => {

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
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={handleHomeClick}>
                    <img src="/img/CD.png" className="logo img-fluid" alt="CD LOGO" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" onClick={handleAboutClick}>
                                <h3>About Us</h3>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={handleMerchClick}>
                                <h3>Merch</h3>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">
                                <h3>Tickets</h3>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">
                                <h3>Music</h3>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={handleContactClick}>
                                <h3>Contact Us</h3>
                            </a>
                        </li>
                        <li className="nav-item">
                            <FaShoppingCart
                                className="shopping-cart"
                                onClick={handleCartClick}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;