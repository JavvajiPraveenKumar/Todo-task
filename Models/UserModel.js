let mongoose = require("mongoose");

let usersch = new mongoose.Schema({
    "_id": String,
    "username": String,
    "password": String
});

let usermodel = mongoose.model("user", usersch);
module.exports = usermodel;
