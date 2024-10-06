import React, { useState } from 'react'; 
import Header from "./header";
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/paymentEntry.css";
import "../css/site.css";

const PaymentEntry = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const data = location.state || { order: {}, totalCost: 0 };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/purchase/shippingEntry', { state: {order: data.order, totalCost: data.totalCost}}); 
    };

    return (
        <div className="body container-fluid">
            <Header />
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                <label>Credit Card Number</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {data.order.credit_card_number = e.target.value;}}
                />
                </div>
                <br />
                <div className="form-group">
                <label>Expiration Date</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {data.order.expiration_date = e.target.value;}}
                />
                </div>
                <br />
                <div className="form-group">
                <label>CVV Code</label>
                 <input
                    type="text"
                    required
                    onChange={(e) => {data.order.cvvCode = e.target.value;}}
                />
                </div>
                <br />
                <div className="form-group">
                <label>Card Holder Name</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {data.order.card_holder_name = e.target.value;}}
                />
                </div>
                <br />
                <div>Total Cost: ${data.totalCost ? data.totalCost.toFixed(2) : '0.00'}</div>
                <button type="submit" className="button">Proceed to Shipping</button>
            </form>
        </div>
    );
};

export default PaymentEntry;
