const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var axios = require("axios");
const session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cookieParser());
var request = require("request");

// Simply Json for Testing
app.get("/api", (req, res) => {
  res.json({ Users: ["user1", "user2", "user3"] });
});
// Simply Json for Testing End

// First API testing
app.get("/getapi", (req, res) => {
  request(
    "https://parind.online/parind4/public/api/v1/categories",

    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});
// First API testing End

// Login API
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/login", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  var data = req.body;

  var config = {
    method: "post",
    // url: "https://parind.online/api/customer/login",
    url: "https://parind.online/parind4/public/api/customer/login",
    data: data,
  };

  axios(config)
    .then(function (response) {
      
      app.use(cookieParser());
      headers = response.headers.get("Set-Cookie");
      res.cookie("Login-Cookie", 1);

      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});
// Login API End

// Register API

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/register", function (req, res) {
  // Cookies that have not been signed
  console.log("Register Cookies: ", req.cookies);

  var data1 = req.body;

  var config = {
    method: "post",
    url: "https://parind.online/api/customer/register",
    data1: data1,
  };

  axios(config)
    .then(function (response) {
      app.use(cookieParser());
      headers = response.headers.get('Set-Cookie');
      res.cookie("Register-Cookie", headers);

      res.send(response.data1);
    })
    .catch(function (error) {
      res.send(error);
    });
});
// Register API End

// Logout API

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/logout", function (req, res) {
  var data = req.body;

  var config = {
    method: "post",
    url: "https://parind.online/parind4/public/api/customer/logout",
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error)
    });
});
// Logout API END

app.listen(4000, () => {
  console.log("Server start at port number 4000");
});
