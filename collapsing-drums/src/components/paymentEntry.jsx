import React, { useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentEntry = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const data = location.state || { order: {} };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/shippingEntry', { state: {order: data.order}}); 
    };

    return (
        <div>
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
            <label>Credit Card Number</label>
            <input
            type="text"
            required
            onChange={(e) => {data.order.credit_card_number = e.target.value;}}
            />
            <br />
            <label>Expiration Date</label>
            <input
            type="text"
            required
            onChange={(e) => {data.order.expiration_date = e.target.value;}}
            />
            <br />
            <label>CVV Code</label>
            <input
            type="text"
            required
            onChange={(e) => {data.order.cvvCode = e.target.value;}}
            />
            <br />
            <label>Card Holder Name</label>
            <input
            type="text"
            required
            onChange={(e) => {data.order.card_holder_name = e.target.value;}}
            />
            <br />
            <button type="submit" className="button">Proceed to Shipping</button>
        </form>
        </div>
    );
};

export default PaymentEntry;
