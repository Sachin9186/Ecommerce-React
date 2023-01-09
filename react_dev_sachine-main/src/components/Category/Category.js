import React from "react";
import { useState, useEffect } from "react";

export default function Category() {
  var [category, setCategory] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://parind.online/api/v1/categories",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
       
        var resp = JSON.parse(result);
       
        setCategory(resp["data"]);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className="cate_section">
        <h4 className="cate_heading">Hot Category</h4>
        <p className="cate_para">We have got you covered!</p>

        <div className="container text-center">
          <div className="row">
            {category.slice(0,8).map((e) => (
              <div className="col-lg-3 apicategory">
                <img key={e["image_url"]} src={e["image_url"]} alt="" />
                <h4 key={e["name"]} className="cate_nme">{e["name"]}</h4>
              </div>
            ))}
            {/* <div className="col-sm">
              <img src="/Category_images/one.jpg" alt="" />
              <h4 className="cate_nme">Chicken</h4>
            </div>
            <div className="col-sm">
              <img src="/Category_images/two.jpg" alt="" />
              <h4 className="cate_nme">Mutton</h4>
            </div>
            <div className="col-sm">
              <img src="/Category_images/marinated.jpg" alt="" />
              <h4 className="cate_nme">Sea Food</h4>
            </div>
            <div className="col-sm">
              <img src="/Category_images/mutton.jpg" alt="" />
              <h4 className="cate_nme">Cold Cuts</h4>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-sm">
              <img src="/Category_images/party_pack.jpg" alt="" />
              <h4 className="cate_nme">Ready to eat</h4>
            </div>
            <div className="col-sm">
              <img src="/Category_images/ready_to_eat.jpg" alt="" />
              <h4 className="cate_nme">Ready to cook</h4>
            </div>
            <div className="col-sm">
              <img src="/Category_images/seafood.jpg" alt="" />
              <h4 className="cate_nme">Party pack</h4>
            </div>
            <div className="col-sm">
              <img src="/Category_images/specialitymeats.jpg" alt="" />
              <h4 className="cate_nme">Meat</h4>
            </div>
          </div> */}
        </div>
      </div>
      {/* <section class="section-products category">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">
              <div class="header">
                <h4 className="cate_heading">Our Category</h4>
                <p className="cate_para">We have got you covered!</p>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-11" class="single-product">
                <div class="part-1">
                  
                  
                </div>
                <div class="part12">
                  <h3 class="ptitle">Chicken</h3>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-12" class="single-product">
                <div class="part-1">
                
                  
                </div>
                <div class="part12">
                   
                  <h3 class="ptitle">Mutton</h3>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-13" class="single-product">
                <div class="part-1">
                  
                  
                </div>
                <div class="part12">
                  <h3 class="ptitle">Seafood</h3>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-14" class="single-product">
                <div class="part-1">
                <span class="discount">New</span>
                  
                </div>
                <div class="part12">
                  <h3 class="ptitle">Cold Cuts</h3>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-15" class="single-product">
                <div class="part-1">
                  
                  
                </div>
                <div class="part12">
                  <h3 class="ptitle">Ready to Eat</h3>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-16" class="single-product">
                <div class="part-1">
                  <span class="discount">New</span>
                  
                </div>
                <div class="part12">
                  <h3 class="ptitle">Ready to Cook</h3>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-17" class="single-product">
                <div class="part-1">
                 
                  
                </div>
                <div class="part12">
                  <h3 class="ptitle">Party Pack</h3>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-18" class="single-product">
                <div class="part-1">
                  
                  
                </div>
                <div class="part12">
                  <h3 class="ptitle">Meat</h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
