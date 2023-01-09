import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Chicken.css";

export default function Chicken() {

  // category code start
  
  var [slider, setSlider] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://parind.online/parind4/public/api/v1/categories",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log(JSON.parse(result));
        var resp = JSON.parse(result);
        setSlider(resp["data"]);
      })
      .catch((error) => console.log("error", error));
  }, []);
  // category code end

  // product code start

  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://parind.online/parind4/public/api/products?category_id=${categoryId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log(JSON.parse(result));
        var resp = JSON.parse(result);
        setItems(resp["data"]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />

      <div className="main_product  m_t_prod">
      
        <div className="sub_categories_container">
          {slider.slice(0, 8).map((e) => {
            return (
              <Link to={`/Chicken/${e.id}`} state={{ e }}>
                <div className="cat_l1">
                  <img className="category_img_1" src={e["image_url"]} />
                  <span className="cat_name">{e["name"]}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="row margin_bottom m_u_may">
          {items.map((em) => {
            return (
              <div className="col-lg-4 margin_for_cart ">
                <Link to={`/SingleProductPage2/${em.url_key}`}>
                  <div class="card">
                    {em.images.map((ew) => {
                      return (
                        <img
                          src={ew["large_image_url"]}
                          class="card-img-top"
                          alt="..."
                        />
                      );
                    })}
                    <div class="card-body">
                      <h5 class="card-title">{em["name"]}</h5>
                      <p className="cart_description">
                        Our medium-sized boneless pieces are cut..
                      </p>
                      <p class="card-waight">Net Wt: 450g</p>
                      <div className="row">
                        <div className="col-md-7">
                          <p className="prise">
                            <span className="mrp">MRP:</span>₹950
                          </p>
                          <p className="off">5% OFF</p>
                        </div>
                        <div className="col-md-5">
                          <a class="btn btn-primary">Add Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
