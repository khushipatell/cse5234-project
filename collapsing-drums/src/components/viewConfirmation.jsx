import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';

function ViewConfirmation() {
    const location = useLocation();
    const data = location.state || { order: {} };


    const navigate = useNavigate();

    const handleSumbit = (e) => {
        navigate('/purchase'); 
    }
    
    return (
        <div>
           <h2>Thank You</h2>
           <h3>Confirmation Number: 4859024321</h3>
           <h5>Total Paid: ${location.state.price}</h5>
           <h5>Payment Under: {location.state.order.card_holder_name}</h5>
           <h5>Shipping Info: {location.state.order.address_1} {location.state.order.city} {location.state.order.state} {location.state.order.zip}</h5>
           <button className='button' onClick={handleSumbit}>Done</button>
        </div>
    );
}

export default ViewConfirmation;