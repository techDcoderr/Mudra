import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Coinapi from './component/Coinapi';
import CountryCurrencyApi from './component/CountryCurrencyApi';
import CurrencyNews from './component/CurrencyNews';
import AboutUs from './component/AboutUs';
import CurrencyConvertor from './component/CurrencyConverter';
import Homepage from './component/Homepage';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Country" element={<CountryCurrencyApi />} />
        <Route path="/Crypto" element={<Coinapi/>} />
<Route path="/News" element={<CurrencyNews/>} />
<Route path="/About" element={<AboutUs/>} />
<Route path="/Converter" element={<CurrencyConvertor/>} />

      </Routes>
    </Router>
  );
}


export default App;