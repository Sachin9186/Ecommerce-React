import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Order from '../components/Order/Order'
import '../components/Order/order.css'
import Orderslider from '../components/orderslider/Orderslider'
import { useState } from "react";

export default function Orderonline(props) {

  const { cartItems, onAdd, onRemove } = props;
  // const [cartItems, setCartItems] = useState([]);
  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };
  return (
    <>
    
    <Navbar/>
    <Orderslider/>
    <Order cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
    <Footer/>

    </>
  )
}
