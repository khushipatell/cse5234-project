import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });

    const navigate = useNavigate();

    const handleSumbit = (e) => {
        navigate('/purchase/paymentEntry', {order: order, setOrder: setOrder}); 
    }

    console.log('order: ', order);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product 1</label>
                <input
                    type="number"
                    required
                    onChange={(e) =>
                        {order.buyQuantity[0] = e.target.value; }}
                />
                <br/>
                <label>Prodct 2</label>
                <input
                    type="number"
                    required
                    onChange={(e) => { order.buyQuantity[1] = e.target.value;}}
                />
                <br/>
                <button className='button'>Pay</button>
            </form>
        </div>
    );
};

export default Purchase;