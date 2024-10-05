import React from "react";
import Header from "./header";
import {useNavigate, useLocation} from 'react-router-dom';
import "../css/shippingEntry.css";

function ShippingEntry() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state || { order: {}, totalCost: 0 };

    const handleSumbit = (e) => {
        e.preventDefault();
        navigate('/purchase/viewConfirmation', { state: { order: data.order, totalCost: data.totalCost }}); 
    }; 

    return (
        <div className="body container-fluid">
            <Header />
            <h2>Shipping Information</h2>
            <form onSubmit={handleSumbit} className="shipping-form">
                <div className="form-group">
                <label>Address Line 1</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.address_1 = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>Address Line 2</label>
                <input
                    type="string"
                    onChange={(e) =>
                        {data.order.address_2 = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>City</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.city = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>State</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.state = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>Zip</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.zip = e.target.value; }}
                />
                </div>
                <br />
                <div> Payment Total Cost: ${data.totalCost ? data.totalCost.toFixed(2) : '0.00'}</div>
                <button className='shipping-button'>Review Order</button>
            </form>
        </div>
    );
}

export default ShippingEntry;
