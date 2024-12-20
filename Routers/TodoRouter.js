let express = require("express");
const { createTodo, getTodos, getTodoById, updateTodo, deleteTodo, clearTodos } = require("../Controllers/Todocontroller");
const {islogin}=require("../Controllers/UserController")

let todoroute = new express.Router();

todoroute.post("/createtodo", islogin,createTodo);          // Create a new to-do
todoroute.get("/getAll/:userId", islogin,getTodos);         // Get all to-dos for a user
todoroute.get("/getbyid/:id/:userId",islogin, getTodoById); // Get a specific to-do by ID
todoroute.put("/update", islogin,updateTodo);               // Update a to-do
todoroute.delete("/delete/:id/:userId",islogin, deleteTodo);// Delete a specific to-do
todoroute.delete("/clear/:userId", islogin,clearTodos);     // Clear all to-dos for a user

module.exports = todoroute;
