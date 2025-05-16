import React, { useState } from 'react';
import Navbar from './compnents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeholder from './pages/Placeholder/Placeholder';
import Footer from './compnents/Footer/Footer';
import Loginpop from './compnents/Loginpop/Loginpop';

const navbar = () => {
  const [showLogIn, setShowLogin] = useState(false);

  return (
    <>
      {showLogIn ? <Loginpop setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} /> {/* Ensure lowercase path */}
          <Route path='/placeholder' element={<Placeholder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default navbar;
