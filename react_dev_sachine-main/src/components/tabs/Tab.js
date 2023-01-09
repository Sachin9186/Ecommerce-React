import React from "react";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Tab() {
  
  const getapidata = async() =>{
   const res1 =  axios.get("https://parind.online/api/products?limit=124");
   console.log(res1)
  }

  const [items, setItems] = useState(Menu);

    const filterMenu = (category) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

  return (
    <div className="container11">
      <h4 className="cate_heading">Our Menu</h4>
      <p className="cate_para">Some Special Menu's</p>
      <div className="bloc-tabs">
        <button className="menu-btns" onClick={() => filterMenu('breakfast')}>
          Chicken
        </button>
        <button className="menu-btns" onClick={() => filterMenu('lunch')}>
          Mutton
        </button>
        <button className="menu-btns" onClick={() => filterMenu('evening')}>
          Seafood
        </button>
        <button className="menu-btns" onClick={() => filterMenu('dinner')}>
          Ready to Eat
        </button>
        <button className="menu-btns" onClick={() => setItems(Menu)}>
          Ready to Cook
        </button>
      </div>

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.slice(0,4).map((elem) => {
                const { id, name, image, description, price, category } = elem;
                return (
                  <div className="single_menu" key={id}>
                    <img src={image} alt="burger" />
                    <div className="menu_content">
                      <h4>
                        {name} <span>{price}</span>
                      </h4>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row my-5">
              {items.slice(4,8).map((elem) => {
                const { id, name, image, description, price, category } = elem;
                return (
                  <div className="single_menu" key={id}>
                    <img src={image} alt="burger" />
                    <div className="menu_content">
                      <h4>
                        {name} <span>{price}</span>
                      </h4>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
