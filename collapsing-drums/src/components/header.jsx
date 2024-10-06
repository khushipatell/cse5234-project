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
    
    const handleProductClick = () => {
        navigate("/purchase");
    };

    const handleAboutClick = () => {
    };

    const handleContactClick = () => {
    };

    return (
        <div className="header row">

            {/* Logo */}
            <div className="header-logo col-md-4 align-self-start" onClick={handleHomeClick}>
                <img className="logo" src="/img/logo.png" alt="Logo"/>
                <h1 className="header-title">Collapsing Drums</h1>
            </div>

            {/* About Page */}
            <div className="page col-md-2 align-self-end" onClick={handleAboutClick}>
                <h3>About Us</h3>    
            </div>

            {/* Product Page */}
            <div className="page col-md-2 align-self-end" onClick={handleProductClick}>
                <h3>Products</h3>    
            </div>

            {/* Contact Page */}
            <div className="page col-md-2 align-self-end" onClick={handleContactClick}>
                <h3>Contact</h3>    
            </div>

            {/* Shopping Cart */}
            <div className="col-md-2 align-self-center">
                <FaShoppingCart
                    className="shopping-cart"
                    onClick={handleCartClick}
            />
            </div>
        </div>
    );
};

export default Header;