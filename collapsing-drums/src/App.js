import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Merch from './components/merch';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';
import Home from './components/home';
import AboutPage from './components/aboutPage';
import ContactUs from './components/contactUs';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/aboutPage' element={<AboutPage/>}/>
            <Route path='/merch' element={<Merch/>}/>
            <Route path='/paymentEntry' element={<PaymentEntry/>}/>
            <Route path='/shippingEntry' element={<ShippingEntry/>}/>
            <Route path='/viewOrder' element={<ViewOrder/>}/>
            <Route path='/viewConfirmation' element={<ViewConfirmation/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path='/' element={<Navigate replace to="/home"/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
