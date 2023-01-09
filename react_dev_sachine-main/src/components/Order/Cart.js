import React from "react";
import { json, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Cart(props) {
  const { categories, cartItems, onAdd, onRemove } = props;
  const [cartdata, setCartdata] = useState(cartItems);
  const [categorydata, setCategorydata] = useState(categories);

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/getapi").then(
      response => response.json()
    ).then(
      data => {
        console.log("nodejs: ",data)
        setBackendData(data)
      }
    )
  }, [])
  
  
  const handle = () => {
    const cartdatta = cartItems
    localStorage.setItem("Cart Data", JSON.stringify(cartItems));
  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <>
      <div className="cartfullsection">
        <h3 className="urorder">Your Order</h3>
        <div className="cartsection">
          {cartItems.length === 0 && <div>Your Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{" "}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>

              <div className="col-2 text-right quntity">
                {item.qty} x Rs.{item.price}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="totalsec">
                <div className="row">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">
                    Rs.{itemsPrice.toFixed(2)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Tax Price</div>
                  <div className="col-1 text-right">
                    Rs.{taxPrice.toFixed(2)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Shipping Price</div>
                  <div className="col-1 text-right">
                    Rs.{shippingPrice.toFixed(2)}
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>Rs.{totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </div>
              <hr />
            </>
          )}
         
        </div>
        <div className="checkoutouterdiv">
          <div className="checkoutbtn">
            <Link
              to="/checkout" onClick={() => handle()}
              state={{ cartItems: cartItems }}
              className=" menu_btn btn btn-danger checkoutbutton"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
