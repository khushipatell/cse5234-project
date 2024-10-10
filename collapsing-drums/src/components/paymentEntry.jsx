import React from 'react'; 
import Header from "./header";
import Footer from "./footer";
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/entry.css";
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
        <div className="body">
            <Header />
            <div className="entry-container">
                <div className="entry-form">
                    <h2 className="text">Payment Information</h2>
                    <form onSubmit={handleSubmit}>
                        {formFields.map((field) => (
                            <InputField
                                key={field.key}
                                label={field.label}
                                type={field.type}
                                onChange={(e) => {data.order[field.key] = e.target.value;}}
                            />
                        ))}
                        <div className="form-group">
                            <label>Total Cost:</label>
                            <input 
                                type="text" 
                                value={`$${data.totalCost ? data.totalCost.toFixed(2) : '0.00'}`} 
                                readOnly 
                            />
                        </div>
                        <button type="submit" className="button">Proceed to Shipping</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PaymentEntry;