import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ReactDOM from 'react-dom';
import './App.css';
import './footer.css';
import './slider.css';
import './iconbox.css';
import './components/navbar.css';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category/Category';
import Main from './pages/Main';
import { useState } from "react";
import Orderonline from './pages/Orderonline';
import Checkoutpage from './pages/Checkoutpage';
import Thankyou from './pages/Thankyou';





function App() {

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return <BrowserRouter>
   
    
    <Routes>
    <Route path="/" element={<Main/>}></Route>
    
    <Route path="/about" element={<About/>}></Route>
    <Route path="/order-online" element={<Orderonline cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}></Route>
    <Route path="/checkout" element={<Checkoutpage/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/confirmorder" element={<Thankyou/>}></Route>
    

  </Routes>
  </BrowserRouter>
}

export default App;
