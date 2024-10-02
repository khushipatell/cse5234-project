import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="contenet">
          <Routes>
            <Route path='/purchase' element={<Purchase/>}/>
            <Route path='/paymentEntry' element={<PaymentEntry/>}/>
            <Route path='/shippingEntry' element={<ShippingEntry/>}/>
            <Route path='/viewOrder' element={<ViewOrder/>}/>
            <Route path='/viewConfirmation' element={<ViewConfirmation/>}/>
            <Route path='/' element={<Navigate replace to="/purchase"/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
