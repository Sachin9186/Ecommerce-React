import React from "react";

import "./menu.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Menu() {
  var [menucategory, menusetCategory] = useState([]);

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
        console.log(JSON.parse(result));
        var resp = JSON.parse(result);
        console.log(resp);
        menusetCategory(resp["data"]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <section id="our_menu" className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page_title text-center mb-4">
                <div className="single_line"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <ul
              className="nav nav-tabs menu_tab mb-4"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="breakfast-tab"
                  data-toggle="tab"
                  to="#breakfast"
                  role="tab"
                >
                  {menucategory.slice(0, 3).map((e) => (
                      <p>{e["name"]}</p>
                  ))}
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="lunch-tab"
                  data-toggle="tab"
                  to="#lunch"
                  role="tab"
                >
                  Mutton
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="dinner-tab"
                  data-toggle="tab"
                  to="#dinner"
                  role="tab"
                >
                  Seafood
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="breakfast-tab"
                  data-toggle="tab"
                  to="#breakfast"
                  role="tab"
                >
                  Ready to eat
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="lunch-tab"
                  data-toggle="tab"
                  to="#lunch"
                  role="tab"
                >
                  Party Pack
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="dinner-tab"
                  data-toggle="tab"
                  to="#dinner"
                  role="tab"
                >
                  Meat
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="tab-content col-lg-12" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="breakfast"
                role="tabpanel"
                aria-labelledby="breakfast-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="single_menu">
                      <img src="https://i.imgur.com/kbpceNv.jpg" alt="burger" />
                      <div className="menu_content">
                        <h4>
                          Chicken Burger <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/lYKUORL.jpg"
                        alt="black coffee"
                      />
                      <div className="menu_content">
                        <h4>
                          Black coffee <span>$20</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/AXAHrf6.jpg"
                        alt="fried rice"
                      />
                      <div className="menu_content">
                        <h4>
                          Fried Rice <span>$45</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat" />
                      <div className="menu_content">
                        <h4>
                          meat <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single_menu">
                      <img src="https://i.imgur.com/TAq7lDR.jpg" alt="burger" />
                      <div className="menu_content">
                        <h4>
                          Chicken Burger <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/lYKUORL.jpg"
                        alt="black coffee"
                      />
                      <div className="menu_content">
                        <h4>
                          Black coffee <span>$20</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/AXAHrf6.jpg"
                        alt="fried rice"
                      />
                      <div className="menu_content">
                        <h4>
                          Fried Rice <span>$45</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat" />
                      <div className="menu_content">
                        <h4>
                          meat <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="lunch"
                role="tabpanel"
                aria-labelledby="lunch-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="single_menu">
                      <img src="https://i.imgur.com/Aowufa1.jpg" alt="pizza" />
                      <div className="menu_content">
                        <h4>
                          12" Pizza <span>$35</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img src="https://i.imgur.com/DJlmZDJ.jpg" alt="salad" />
                      <div className="menu_content">
                        <h4>
                          Salad <span>$20</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/knnQm7e.jpg"
                        alt="green tea"
                      />
                      <div className="menu_content">
                        <h4>
                          green tea <span>$15</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat" />
                      <div className="menu_content">
                        <h4>
                          meat <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single_menu">
                      <img src="https://i.imgur.com/kbpceNv.jpg" alt="burger" />
                      <div className="menu_content">
                        <h4>
                          Chicken Burger <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/lYKUORL.jpg"
                        alt="black coffee"
                      />
                      <div className="menu_content">
                        <h4>
                          Black coffee <span>$20</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/AXAHrf6.jpg"
                        alt="fried rice"
                      />
                      <div className="menu_content">
                        <h4>
                          Fried Rice <span>$45</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat" />
                      <div className="menu_content">
                        <h4>
                          meat <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="dinner"
                role="tabpanel"
                aria-labelledby="dinner-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="single_menu">
                      <img src="https://i.imgur.com/kbpceNv.jpg" alt="burger" />
                      <div className="menu_content">
                        <h4>
                          Chicken Burger <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/lYKUORL.jpg"
                        alt="black coffee"
                      />
                      <div className="menu_content">
                        <h4>
                          Black coffee <span>$20</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/AXAHrf6.jpg"
                        alt="fried rice"
                      />
                      <div className="menu_content">
                        <h4>
                          Fried Rice <span>$45</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat" />
                      <div className="menu_content">
                        <h4>
                          meat <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single_menu">
                      <img src="https://i.imgur.com/kbpceNv.jpg" alt="burger" />
                      <div className="menu_content">
                        <h4>
                          Chicken Burger <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/lYKUORL.jpg"
                        alt="black coffee"
                      />
                      <div className="menu_content">
                        <h4>
                          Black coffee <span>$20</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img
                        src="https://i.imgur.com/AXAHrf6.jpg"
                        alt="fried rice"
                      />
                      <div className="menu_content">
                        <h4>
                          Fried Rice <span>$45</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                    <div className="single_menu">
                      <img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat" />
                      <div className="menu_content">
                        <h4>
                          meat <span>$24</span>
                        </h4>
                        <p>
                          Aperiam tempore sit,perferendis numquam repudiandae
                          porro voluptate dicta saepe facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className=" menu_btn btn btn-danger">
              Show More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
