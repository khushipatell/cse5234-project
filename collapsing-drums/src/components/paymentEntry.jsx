import React from 'react'; 
import Header from "./header";
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/paymentEntry.css";
import "../css/site.css";

// Create a reusable Input component
const InputField = ({ label, type, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            type={type}
            required
            value={value}
            onChange={onChange}
        />
    </div>
);

const PaymentEntry = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const data = location.state || { order: {}, totalCost: 0 };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/shippingEntry', { state: { order: data.order, totalCost: data.totalCost }}); 
    };

    // Define form fields configuration
    const formFields = [
        { label: 'Credit Card Number', type: 'text', key: 'credit_card_number' },
        { label: 'Expiration Date', type: 'text', key: 'expiration_date' },
        { label: 'CVV Code', type: 'text', key: 'cvvCode' },
        { label: 'Card Holder Name', type: 'text', key: 'card_holder_name' },
    ];

    return (
        <div className="body container-fluid">
            <Header />
            <div className="form-container">
            <h2 className="text">Payment Information</h2>
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
                <div className="text">Total Cost: ${data.totalCost ? data.totalCost.toFixed(2) : '0.00'}</div>
                <button type="submit" className="button">Proceed to Shipping</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentEntry;
