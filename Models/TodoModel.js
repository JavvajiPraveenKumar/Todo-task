let mongoose = require("mongoose");

let todosch = new mongoose.Schema({
    "_id": String,
    "title": String,
    "description": String,
    "state": {
        type: String,
        enum: ["completed", "incomplete"],
        default: "incomplete"
    },
    "userId": {
        type: String,  // userId is a String, assuming you are using the email as the user identifier.
        required: true
    }
});

let todomodel = mongoose.model("todo", todosch);
module.exports = todomodel;
