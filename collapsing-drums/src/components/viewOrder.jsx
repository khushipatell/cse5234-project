import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import '../css/viewOrder.css';

function ViewOrder() {
    const location = useLocation();
    const data = location.state || { order: {} };
    const pricePerItem = [2,3,2,4,6];


    const navigate = useNavigate();

    const handleSumbit = (e) => {
        navigate('/viewConfirmation', { state: { order: data.order }}); 
    }
    
    const totalPrice = ((location.state.order.buyQuantity[0] * pricePerItem[0]) + (location.state.order.buyQuantity[1] * pricePerItem[1]) + (location.state.order.buyQuantity[2] * pricePerItem[2]) + (location.state.order.buyQuantity[3] * pricePerItem[3]) + (location.state.order.buyQuantity[4] * pricePerItem[4]));

    return (
        <div>
            <h1>Items Summary</h1>
            <hr class="mainDivider"/>
            <h2>Product 1</h2>
                <p>Quantity: {location.state.order.buyQuantity[0]}</p>
            <hr class="secondaryDivider"/>
            <h2>Product 2</h2>
                <p>Quantity: {location.state.order.buyQuantity[1]}</p>
            <hr class="secondaryDivider"/>
            <h2>Product 3</h2>
                <p>Quantity: {location.state.order.buyQuantity[2]}</p>
            <hr class="secondaryDivider"/>
            <h2>Product 4</h2>
                <p>Quantity: {location.state.order.buyQuantity[3]}</p>
            <hr class="secondaryDivider"/>
            <h2>Product 5</h2>
                <p>Quantity: {location.state.order.buyQuantity[4]}</p>
            <hr class="secondaryDivider"/>
            <h2>Items Total</h2>
                <p>Total Price: ${totalPrice}</p>
        </div>
    );
}

export default ViewOrder;
