import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';
import Home from './components/home';
import ContactUs from './components/contactUs';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/purchase' element={<Purchase/>}/>
            <Route path='/purchase/paymentEntry' element={<PaymentEntry/>}/>
            <Route path='/purchase/shippingEntry' element={<ShippingEntry/>}/>
            <Route path='/purchase/viewOrder' element={<ViewOrder/>}/>
            <Route path='/purchase/viewConfirmation' element={<ViewConfirmation/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path='/' element={<Navigate replace to="/home"/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
