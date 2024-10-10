import React from "react";
import Header from "./header";
import {useNavigate, useLocation} from 'react-router-dom';
import "../css/shippingEntry.css";
import "../css/site.css";

function ShippingEntry() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state || { order: {}, totalCost: 0 };

    const handleSumbit = (e) => {
        e.preventDefault();
        navigate('/viewConfirmation', { state: { order: data.order, totalCost: data.totalCost }}); 
    }; 

    return (
        <div className="body container-fluid">
            <Header />
            <div className="form-container">
            <h2 className="text">Shipping Information</h2>
            <form onSubmit={handleSumbit} className="shipping-form">
                <div className="form-group">
                <label>Address Line 1</label>
                <input
                    type="text"
                    required
                    onChange={(e) =>
                        {data.order.address_1 = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>Address Line 2</label>
                <input
                    type="text"
                    onChange={(e) =>
                        {data.order.address_2 = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>City</label>
                <input
                    type="text"
                    required
                    onChange={(e) =>
                        {data.order.city = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>State</label>
                <input
                    type="text"
                    required
                    onChange={(e) =>
                        {data.order.state = e.target.value; }}
                />
                </div>
                <br/>
                <div className="form-group">
                <label>Zip</label>
                <input
                    type="text"
                    required
                    onChange={(e) =>
                        {data.order.zip = e.target.value; }}
                />
                </div>
                <br />
                <button className='button'>Review Order</button>
            </form>
            </div>
        </div>
    );
}

export default ShippingEntry;
