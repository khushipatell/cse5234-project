import React from "react";
import Header from "./header";
import {useNavigate, useLocation} from 'react-router-dom';
import "../css/viewConfirmation.css";
import "../css/site.css";

function ViewConfirmation() {
    const location = useLocation();
    const data = location.state || { order: {}, totalCost: 0 };


    const navigate = useNavigate();

    const handleSumbit = (e) => {
        navigate('/home'); 
    }
    console.log("view" + data.totalCost);

    return (
        <div className="container-fluid body">
            <Header />
            <div className="confirm-box">
                <h3>Confirmation Number: 4859024321</h3>
                <h5>Total Paid: ${location.state.totalCost}</h5>
                <h5>Payment Under: {location.state.order.card_holder_name}</h5>
                <h5>Shipping Info: {location.state.order.address_1} {location.state.order.city} {location.state.order.state} {location.state.order.zip}</h5>
                <button className='button' onClick={handleSumbit}>Done</button>
            </div>
        </div>
    );
}

export default ViewConfirmation;