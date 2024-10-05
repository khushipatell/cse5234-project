import React from "react";
import {useNavigate} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../css/header.css";

const Header = () => {

    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/shoppingcart");
    };

    return (
        <div className="header">
            <h1 className="header-title">Collapsing Drums</h1>
            <FaShoppingCart
                className="shopping-cart"
                onClick={handleCartClick}
            />
        </div>
    );
};

export default Header;