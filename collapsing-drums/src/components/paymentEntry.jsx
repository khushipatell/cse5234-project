import React, { useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentEntry = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const { order } = location.state || { order: {} };


    const [paymentInfo, setPaymentInfo] = useState({
        credit_card_number: '',
        expiration_date: '',
        cvvCode: '',
        card_holder_name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedOrder = { ...order, ...paymentInfo };
        navigate('/shippingEntry', { state: { order: updatedOrder } }); 
    };

    return (
        <div>
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
            <label>Credit Card Number</label>
            <input
            type="text"
            required
            value={paymentInfo.credit_card_number}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, credit_card_number: e.target.value })}
            />
            <br />
            <label>Expiration Date</label>
            <input
            type="text"
            required
            value={paymentInfo.expiration_date}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, expiration_date: e.target.value })}
            />
            <br />
            <label>CVV Code</label>
            <input
            type="text"
            required
            value={paymentInfo.cvvCode}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvvCode: e.target.value })}
            />
            <br />
            <label>Card Holder Name</label>
            <input
            type="text"
            required
            value={paymentInfo.card_holder_name}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, card_holder_name: e.target.value })}
            />
            <br />
            <button type="submit" className="button">Proceed to Shipping</button>
        </form>
        </div>
    );
};

export default PaymentEntry;
