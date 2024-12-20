const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usermodel = require("../Models/UserModel");

let reg = async (req, res) => {
    try {
        console.log(req.body);
        let obj = await usermodel.findById(req.body._id); // Use findById correctly

        if (obj) {
            return res.json({ msg: "Account already exists with the given email" });
        } else {
            let hashcode = await bcrypt.hash(req.body.password, 10);
            let data = new usermodel({ _id: req.body._id, username: req.body.username, password: hashcode });
            await data.save();
            return res.json({ msg: "Account created successfully" });
        }
    } catch (err) {
        console.log("error",err);
        return res.json({ msg: err });
    }
};

let login = async (req, res) => {
    try {
        console.log(req.body);
        let obj = await usermodel.findById(req.body._id); // Use findById correctly
        if (obj) {
            let isValidPassword = await bcrypt.compare(req.body.password, obj.password);
            if (isValidPassword) {
                return res.json({
                    token: jwt.sign({ _id: obj._id }, "abcd", { expiresIn: "1h" }),
                    _id: obj._id,
                    username: obj.username,
                });
            } else {
                return res.json({ msg: "Invalid password" });
            }
        } else {
            return res.json({ msg: "User not found. Please check email" });
        }
    } catch (err) {
        console.log(err);
        return res.json({ msg: "Server error", error: err });
    }
};
let logout = (req, res) => {
    try {
        res.json({ msg: "Logged out successfully" });
    } catch (err) {
        console.log(err);
        res.json({ msg: "Server error during logout" });
    }
};




// Authentication middleware
let islogin = (req, res, next) => {
    try {
        jwt.verify(req.headers.authorization, "abcd");
        next();
    } catch (err) {
        res.json({ err: "Please login to access this resource" });
    }
};

module.exports = { reg, login,logout, islogin };
