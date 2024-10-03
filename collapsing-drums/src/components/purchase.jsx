import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./header";
import "../css/purchase.css";

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });

    const navigate = useNavigate();

    // const handleSumbit = (e) => {
    //     navigate('/purchase/paymentEntry', {order: order, setOrder: setOrder}); 
    // } 

    const handleSumbit = (e) => {
    e.preventDefault();
    navigate('/paymentEntry', { state: { order: order } }); 
};

    console.log('order: ', order);

    return (
        <div className = "body container-fluid">
            <Header/>
            <form onSubmit={handleSumbit}>
            <div className = "row align-item-start">
                <div className = "col-md-2">
                    <label>Product 1</label>
                        <input
                            type="number"
                            required
                            onChange={(e) =>
                                {order.buyQuantity[0] = e.target.value; }}
                        />
                </div>
                <br/>
                <div className = "col-md-2">
                    <label>Product 2</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { order.buyQuantity[1] = e.target.value;}}
                        />
                </div>
                <br/>
                <div className = "col-md-2">
                    <label>Product 3</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { order.buyQuantity[2] = e.target.value;}}
                        />
                </div>
                <br/>
                <div className = "col-md-2">
                    <label>Product 4</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => { order.buyQuantity[3] = e.target.value;}}
                        />
                </div>
                <br/>                   
                <div className = "col-md-2">
                    <label>Product 5</label>
                    <input
                        type="number"
                        required
                        onChange={(e) => { order.buyQuantity[4] = e.target.value;}}
                    />
                </div>
                <br/>
                <button className='button'>Pay</button>
                </div>
            </form>
        </div>
    );
};

export default Purchase;