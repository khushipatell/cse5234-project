import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../css/viewOrder.css";
import "../css/site.css";

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state || { order: {} };
    const [data, setData] = useState([]);

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
        // Fetch data from an API
        fetch('https://0q2mix7rob.execute-api.us-east-2.amazonaws.com/devOrder/inventory-management/inventory/items/id', {
        })
          .then(response => {
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            return response.json();  // Convert response to JSON
          })
          .then(data => setData(data))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
        const total = calculateTotalCost();
        setTotalCost(total);
    }, [order]); 

    const handleCheckout = () => {
        console.log("Total Cost:", totalCost); // Debugging line
        navigate("/paymentEntry", {state: {order: order, totalCost: totalCost } }); // Navigate to checkout page
    };

    return (
        <div className="container-fluid body">
            <Header />
            <div className="cart-container">
            <h1 className="text">Your Shopping Cart</h1>
            <div className="cart-items">
                {data.map((item, index) => {
                    const quantity = order.buyQuantity[index];
                    if (quantity > 0) {
                        return (
                            <div key={index} className="view-row">
                                    <div className="view-name">{item.name}</div>
                                    <img src={item.image} alt={item.name} className="view-image" />
                                    <div className="view-price">Price: ${item.cost}</div>
                                    <div className="view-quantity">Quantity: {quantity}</div>
                                    <p>Total: ${(item.cost * quantity).toFixed(2)}</p>
                            </div>
                        );
                    }
                    return null; // Skip products with 0 quantity
                })}
            </div>
            <div className="checkout">
                <h2 className = "text">Total Cost: ${totalCost.toFixed(2)}</h2>
                <button className="checkoutbutton" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
