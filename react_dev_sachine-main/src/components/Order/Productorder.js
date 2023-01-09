import React from "react";
import { useState, useEffect } from "react";

export default function Productorder(props) {
    const { categories, onAdd } = props;
    const [products, setProducts] = useState([]);

  
  return (
    <>
      <div className="first">
        {categories.map((ec) => (
          <div className="main-container">
            <h2 className="categorytitle" id={ec["name"]}>
              {ec["name"]}
            </h2>

            <div className="sectionfirst row">
              {ec.product.slice(0, 4).map((ew) => {
                return (
                  <div className="productallinfodiv col-lg-6" key={ew.id}>
                    <div className="productdetails">
                      <div className="productfirst">
                        {ew.images.map((ewm) => {
                          return (
                            <div className="productinfimg">
                              <img
                                className="primg"
                                key={ewm["small_image_url"]}
                                src={ewm["small_image_url"]}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        <div className="productinfo1">
                          <h4 className="producttitle">{ew["name"]}</h4>
                          <h4 className="productpricee">Rs. {ew["price"]}</h4>
                        </div>
                        <div className="productinfo2">
                          
                          <button onClick={() => onAdd(ew)} className="atcbtn">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
