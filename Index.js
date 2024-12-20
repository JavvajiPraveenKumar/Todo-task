let mongoose = require("mongoose");
let express = require("express");
const UserRoute = require("./Routers/UserRouter");
const TodoRoute = require("./Routers/TodoRouter");
var bodyParser = require('body-parser');
let cors = require("cors");

let app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/Todo-Task").then(() => {
    console.log("connected to MongoDB");
});

app.use("/user", UserRoute);
app.use("/Todo", TodoRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
