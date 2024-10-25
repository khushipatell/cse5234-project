import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import "../css/viewConfirmation.css";
import "../css/site.css";

function ViewConfirmation() {
    const location = useLocation();
    const { order } = location.state || { order: {}, totalCost: 0 };
    const [confirmationNumber, setConfirmationNumber] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const orderProcessingUrl = 'https://0q2mix7rob.execute-api.us-east-2.amazonaws.com/inventoryStage/order-processing/order';

    useEffect(() => {
        const processOrder = async () => {
            try {
                const response = await fetch(orderProcessingUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({order}), // Send order data
                });

                const dataResponse = await response.json();

                if (response.ok) {
                    setConfirmationNumber(dataResponse.confirmation_number); // Set confirmation number on success
                } else {
                    setErrorMessage("An error occurred while processing your order. Please try again.");
                }
            } catch (error) {
                setErrorMessage("Network error. Please check your connection and try again.");
                console.error("Error:", error);
            }
        };

        processOrder();
    }, [order]);

    const navigate = useNavigate();

    const handleSumbit = (e) => {
        navigate('/home'); 
    }

    return (
        <div className="container-fluid body">
            <Header />
            <div className="confirm-container">
            <div className="confirm-box">
                {confirmationNumber ? (
                <>
                <h3>Confirmation Number: {confirmationNumber}</h3>
                <h5>Total Paid: ${location.state.totalCost}</h5>
                <h5>Payment Under: {order.card_holder_name}</h5>
                <h5>Shipping Info: {order.address_1} {order.city} {order.state} {order.zip}</h5>
                <button className='button' onClick={handleSumbit}>Done</button>
                </>
                ) : (
                    <p> Processing your order ... </p>
                )}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ViewConfirmation;