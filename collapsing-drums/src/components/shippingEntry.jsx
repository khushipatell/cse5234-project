import React from "react";
import Header from "./header";
import Footer from "./footer";
import {useNavigate, useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import "../css/entry.css";
import "../css/site.css";

function ShippingEntry() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state || { order: {}, totalCost: 0 };

    const handleSumbit = (e) => {
        e.preventDefault();
        navigate('/viewConfirmation', { state: { order: data.order, totalCost: data.totalCost }}); 
    }; 

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

    // Define form fields configuration
    const formFields= [
        {label: 'Address Line 1', type: 'text', key: 'address_1'},
        {label: 'Address Line 2', type: 'text', key: 'address_2'},
        {label: 'City', type: 'text', key: 'city'},
        {label: 'State', type: 'text', key:'state'},
        {label: 'Zip Code', type: 'text', key: 'zip'}
    ];

    return (
        <div className="body container-fluid">
            <Header />
            <div className="entry-container">
                <div className="entry-form">
                <h2 className="text">Shipping Information</h2>
                <form onSubmit={handleSumbit}>
                    {formFields.map((field) => (
                        <InputField
                            key={field.key}
                            label={field.label}
                            type={field.type}
                            onChange={(e) => {data.order[field.key] = e.target.value;}}
                        />
                    ))}
                <br />
                <button className='button'>Review Order</button>
                </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ShippingEntry;
