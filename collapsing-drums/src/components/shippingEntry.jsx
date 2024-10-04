import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';

function ShippingEntry() {
    const location = useLocation();
    const data = location.state || { order: {} };

    const navigate = useNavigate();

    const handleSumbit = (e) => {
        navigate('/purchase/viewOrder', { state: { order: data.order }}); 
    } 

    return (
        <div>
            <h2>Shipping Information</h2>
            <form onSubmit={handleSumbit}>
                <label>Address Line 1</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.address_1 = e.target.value; }}
                />
                <br/>
                <label>Address Line 2</label>
                <input
                    type="string"
                    onChange={(e) =>
                        {data.order.address_2 = e.target.value; }}
                />
                <br/>
                <label>City</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.city = e.target.value; }}
                />
                <br/>
                <label>State</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.state = e.target.value; }}
                />
                <br/>
                <label>Zip</label>
                <input
                    type="string"
                    required
                    onChange={(e) =>
                        {data.order.zip = e.target.value; }}
                />
                <br />
                <button className='button'>Review Order</button>
            </form>
        </div>
    );
}

export default ShippingEntry;
