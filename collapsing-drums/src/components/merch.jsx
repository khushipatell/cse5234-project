import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../css/site.css";
import "../css/merch.css";
import axios from "axios";

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });

    const [data, setData] = useState([]);

    const [response, setResponse] = useState(null);

    //id = 1;

    const navigate = useNavigate();

    // const products = [
    //     { name: "Neutral Drum Set", image: "/img/DrumSet.jpeg", cost: 700 },
    //     { name: "Neutral Guitar", image: "/img/Guitar.jpeg", cost: 100 },
    //     { name: "Baby Pink Keyboard", image: "/img/PinkKeyboard.jpeg", cost: 200 },
    //     { name: "Blue Violin", image: "/img/BlueViolin.jpeg", cost: 300 },
    //     { name: "Green Tamborine", image: "/img/GreenTamb.jpeg", cost: 50 }
    // ];

    const handleSumbit = (e) => {
        e.preventDefault();
        navigate('/viewOrder', { state: {order: order} });  // Pass the order and update function
    };

    useEffect(() => {
        // Fetch data from an API
        fetch('https://0q2mix7rob.execute-api.us-east-2.amazonaws.com/devOrder/inventory-management/inventory/items/id', {
        })
          .then(response => {
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            return response.json();  // Convert response to JSON
          })
          .then(data => setData(data))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [order.buyQuantity]);

    return (
        <div className="body container-fluid">
        <Header />
        <div className="purchase-container">
        <form onSubmit={handleSumbit} className="purchase-form">
            <div className="product-row">
                {data.map((item, index) => (
                    <div key={index} className="product-item">
                        <p>{item.name}</p>
                        <img src={item.image} alt={item.name} className="product-image" />
                        <p>Cost: ${item.cost}</p>
                        <p>Available Quantity: {item.availableQuantity}</p>
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
        <Footer />
        </div>
    );
};

export default Purchase;