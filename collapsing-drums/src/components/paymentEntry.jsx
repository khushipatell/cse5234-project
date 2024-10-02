import React from 'react'
import { useLocation } from 'react--router-dom'

const PaymentEntry = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvvCode: '',
        cardHolderName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({
            ...paymentInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(paymentInfo);
    };
};

return (
    <div>
        <h1>Payment Entry</h1>
        <form>
            <label>Card Number</label>
            <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} />
            <label>Expiration Date</label>
            <input type="text" name="expirationDate" value={paymentInfo.expirationDate} onChange={handleChange} />
            <label>CVV Code</label>
            <input type="text" name="cvvCode" value={paymentInfo.cvvCode} onChange={handleChange} />
            <label>Card Holder Name</label>
            <input type="text" name="cardHolderName" value={paymentInfo.cardHolderName} onChange={handleChange} />
            <button onClick={handleSubmit}>Pay</button>
        </form>
    </div>
);


export default PaymentEntry;