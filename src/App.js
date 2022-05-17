import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home />
        <Services />
        <Products />
        <SignUp /> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='products' element={<Products />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
