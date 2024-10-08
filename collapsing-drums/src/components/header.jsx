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
        navigate("/contactUs");
    };

    return (
        <div className="header row justify-content-end">

             {/* Home Page */}
             <div className="page col-sm-2 col-md-2 align-self-end" onClick={handleHomeClick}>
                <h3>Home</h3>    
            </div>

            {/* About Page */}
            <div className="page col-sm-2 col-md-2 align-self-end" onClick={handleAboutClick}>
                <h3>About Us</h3>    
            </div>

            {/* Product Page */}
            <div className="page col-sm-2 col-md-2 align-self-end" onClick={handleProductClick}>
                <h3>Products</h3>    
            </div>

            {/* Contact Page */}
            <div className="page col-sm-2 col-md-2 align-self-end" onClick={handleContactClick}>
                <h3>Contact</h3>    
            </div>

            {/* Shopping Cart */}
            <div className="page col-sm-2 col-md-2 align-self-end">
                <FaShoppingCart
                    className="shopping-cart"
                    onClick={handleCartClick}
                />
            </div>
            
        </div>
    );
};

export default Header;