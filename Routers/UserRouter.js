let express = require("express");
const { login, reg, logout } = require("../Controllers/UserController");

let route = new express.Router();
route.post("/login", login);
route.post("/reg", reg);
route.post("/logout",logout);
module.exports = route;
