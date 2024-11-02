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
    const [totalCost, setTotalCost] = useState(0);
    const [error, setError] = useState(null);

    // Calculate total cost based on quantities
    const calculateTotalCost = () => {
        return data.reduce((total, product, index) => {
            const quantity = order.buyQuantity[index] || 0;
            return total + (product.cost * quantity);
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
          .then(data => {
            setData(data);
                // Calculate total cost once we have the data
                const total = data.reduce((total, item, index) => {
                const quantity = order.buyQuantity[index] || 0;
                return total + (item.price * quantity);
            }, 0);
             setTotalCost(total);
        })
          .catch(error => {
            console.error('Error fetching data:', error); 
          });
        const total = calculateTotalCost();
        setTotalCost(total);
    }, [order]); 

    const handleCheckout = () => {
        console.log("Total Cost:", totalCost); // Debugging line
        navigate("/paymentEntry", {state: {
            order: order, 
            totalCost: totalCost } }); // Navigate to checkout page
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
                            <div key={index.id} className="view-row">
                                    <div className="view-name">{item.name}</div>
                                    <img src={item.image_file_path} alt={item.name} className="view-image" />
                                    <div className="view-price">Price: ${item.price}</div>
                                    <div className="view-quantity">Quantity: {quantity}</div>
                                    <p>Total: ${(item.price * quantity).toFixed(2)}</p>
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