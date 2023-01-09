import React from "react";
import "../producthp/producthp.css";
import { useState, useEffect } from "react";

export default function Producthp() {
  var [product, setProduct] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://parind.online/api/products",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        
        var resp = JSON.parse(result);
        // console.log(resp);
        setProduct(resp["data"]);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className="cate_section">
        <h4 className="cate_heading">Best Selling Products</h4>
        <p className="cate_para">Our Delicious Food</p>

        <div className="container text-center">
          <div className="row">
            {product.slice(0, 4).map((e) => (
              <div className="col-lg-3 apicategory">
                {e.images.map((ew) => {
                  return (
                    <img
                      key={ew["large_image_url"]}
                      src={ew["large_image_url"]}
                      alt=""
                    />
                  );
                })}
                <div className="productdescri">
                  <h4 key={e["name"]} className="category_name">
                    {e["name"]}
                  </h4>
				  <h4 key={e["price"]} className="category_price">Rs {e["formated_price"]}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <section class="section-products">
		<div class="container">
				<div class="row justify-content-center text-center">
						<div class="col-md-8 col-lg-6">
								<div class="header">
										<h4 className='cate_heading'>Popular Product</h4>
										<p className='cate_para'>Delicious Food</p>
								</div>
						</div>
				</div>
				<div class="row">
						
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
										<div class="part-1">
												<ul>
														<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i class="fas fa-heart"></i></a></li>
														<li><a href="#"><i class="fas fa-plus"></i></a></li>
														<li><a href="#"><i class="fas fa-expand"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Spicy Chicken</h3>
												
												<h4 class="product-price">$49.99</h4>
										</div>
								</div>
						</div>
						
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-2" class="single-product">
										<div class="part-1">
												<span class="discount">15% off</span>
												<ul>
														<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i class="fas fa-heart"></i></a></li>
														<li><a href="#"><i class="fas fa-plus"></i></a></li>
														<li><a href="#"><i class="fas fa-expand"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Hot Chicken</h3>
												<h4 class="product-price">$49.99</h4>
										</div>
								</div>
						</div>
						
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-3" class="single-product">
										<div class="part-1">
												<ul>
														<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i class="fas fa-heart"></i></a></li>
														<li><a href="#"><i class="fas fa-plus"></i></a></li>
														<li><a href="#"><i class="fas fa-expand"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Mutton</h3>
												
												<h4 class="product-price">$49.99</h4>
										</div>
								</div>
						</div>
						
						<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-4" class="single-product">
										<div class="part-1">
										<span class="discount">New</span>
												<ul>
														<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i class="fas fa-heart"></i></a></li>
														<li><a href="#"><i class="fas fa-plus"></i></a></li>
														<li><a href="#"><i class="fas fa-expand"></i></a></li>
												</ul>
										</div>
										<div class="part-2">
												<h3 class="product-title">Seafood Fish</h3>
												<h4 class="product-price">$49.99</h4>
										</div>
								</div>
						</div>
						
						
				</div>
		</div>
</section> */}
    </>
  );
}
