import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../css/site.css";
import "../css/merch.css";

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0, 0, 0, 0],
        credit_card_number: '',
        expir_date: '',
        cvvCode: '',
        card_holder_name: '',
        customer_email: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: '',
    });

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();
        navigate('/viewOrder', { state: { order: order } });  // Pass the order and update function
    };

    useEffect(() => {
        // Fetch data from an API
        fetch('https://0q2mix7rob.execute-api.us-east-2.amazonaws.com/devOrder/inventory-management/inventory/items/id') // Assuming this endpoint fetches all items
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log('Fetched data: ', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="body container-fluid">
            <Header />
            <div className="purchase-container">
                <form onSubmit={handleSumbit} className="purchase-form">
                    <div className="product-row">
                        {data.map((item, index) => (
                            <div key={index} className="product-item">
                                <p>{item.name}</p>
                                <img className="product-image" src={item.image_file_path} alt={item.name} />
                                <p>Cost: ${item.price}</p>
                                <p>Available Quantity: {item.quantity}</p>
                                <input
                                    type="number"
                                    min="0"
                                    required
                                    onChange={(e) => {
                                        const newQuantities = [...order.buyQuantity];
                                        newQuantities[index] = e.target.value; // Update quantity for the specific item
                                        setOrder({ ...order, buyQuantity: newQuantities });
                                    }}
                                    placeholder="Quantity"
                                />
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="button"><b>Purchase</b></button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Purchase;
