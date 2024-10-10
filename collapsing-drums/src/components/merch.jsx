import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./header";
import "../css/site.css";
import "../css/merch.css";

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });

    const navigate = useNavigate();

    const products = [
        { name: "Neutral Drum Set", image: "/img/DrumSet.jpeg", cost: 700 },
        { name: "Neutral Guitar", image: "/img/Guitar.jpeg", cost: 100 },
        { name: "Baby Pink Keyboard", image: "/img/PinkKeyboard.jpeg", cost: 200 },
        { name: "Blue Violin", image: "/img/BlueViolin.jpeg", cost: 300 },
        { name: "Green Tamborine", image: "/img/GreenTamb.jpeg", cost: 50 }
    ];

    const handleSumbit = (e) => {
        e.preventDefault();
        navigate('/viewOrder', { state: {order: order} });  // Pass the order and update function
    };

    useEffect(() => {
        console.log("Updated buyQuantity:", order.buyQuantity);
    }, [order.buyQuantity]); 

    return (
        <div className="body container-fluid">
        <Header />
        <form onSubmit={handleSumbit} className="purchase-form">
            <div className="product-row">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <p>{product.name}</p>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p>Cost: ${product.cost}</p>
                        <input
                            type="number"
                            min="0"
                            required
                            onChange={(e) => {order.buyQuantity[index] = e.target.value;}}
                            placeholder="Quantity"
                        />
                    </div>
                ))}
            </div>
            <button type="submit" className="button"><b>Purchase</b></button>
        </form>
        </div>
    );
};

export default Purchase;