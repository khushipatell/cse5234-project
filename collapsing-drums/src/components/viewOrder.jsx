import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import "../css/viewOrder.css";
import "../css/site.css";

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state || { order: {} };

    // Products array similar to the Purchase component
    const products = [
        { name: "Neutral Drum Set", image: "/img/DrumSet.jpeg", cost: 700 },
        { name: "Neutral Guitar", image: "/img/Guitar.jpeg", cost: 100 },
        { name: "Baby Pink Keyboard", image: "/img/PinkKeyboard.jpeg", cost: 200 },
        { name: "Blue Violin", image: "/img/BlueViolin.jpeg", cost: 300 },
        { name: "Green Tamborine", image: "/img/GreenTamb.jpeg", cost: 50 }
    ];

    const [totalCost, setTotalCost] = useState(0);

    // Calculate total cost based on quantities
    const calculateTotalCost = () => {
        return products.reduce((total, product, index) => {
            return total + product.cost * order.buyQuantity[index];
        }, 0);
    };

    useEffect(() => {
        const total = calculateTotalCost();
        setTotalCost(total);
    }, [order]); 

    const handleCheckout = () => {
        console.log("Total Cost:", totalCost); // Debugging line
        navigate("/paymentEntry", {state: {order: order, totalCost: totalCost } }); // Navigate to checkout page
    };

    return (
        <div className="cart-container body">
            <Header />
            <h1 className="text">Your Shopping Cart</h1>
            <div className="cart-items">
                {products.map((product, index) => {
                    const quantity = order.buyQuantity[index];
                    if (quantity > 0) {
                        return (
                            <div key={index} className="view-row">
                                    <div className="view-name">{product.name}</div>
                                    <img src={product.image} alt={product.name} className="view-image" />
                                    <div className="view-price">Price: ${product.cost}</div>
                                    <div className="view-quantity">Quantity: {quantity}</div>
                                    <p>Total: ${(product.cost * quantity).toFixed(2)}</p>
                            </div>
                        );
                    }
                    return null; // Skip products with 0 quantity
                })}
            </div>
            <h2 className = "text">Total Cost: ${totalCost.toFixed(2)}</h2>
            <button className="button" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
