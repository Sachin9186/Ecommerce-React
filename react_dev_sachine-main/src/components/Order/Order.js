import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import Productorder from "./Productorder";

export default function Order(props) {
 
  const { cartItems, onAdd, onRemove } = props;

  

  

  // Catgeory vise product code start

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://parind.online/api/categoryproducts", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        var resp = JSON.parse(result);
        console.log(resp);
        setCategories(resp);
        
      })
      .catch((error) => console.log("error", error));
  }, []);

  // Catgeory vise product code end

  return (
    <>
      <div className="row orderonline">
        <div className="column side1">
          <h4 className="menu">Menu</h4>
          <ul className="category_list">
          {categories.map((categoryitem) => (
           
            
              <li>
                <a href={`#${categoryitem["name"]}`}>{categoryitem["name"]}</a>
              </li>
            
            
          ))}
          </ul>
        </div>

        <div className="column middle">
          <Productorder onAdd={onAdd} categories={categories}/>
        </div>

        <div className="column side2">
          <Cart categories={categories} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
          
        </div>
      </div>
    </>
  );
}
