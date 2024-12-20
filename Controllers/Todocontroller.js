const { v4: uuid4 } = require("uuid");
const todomodel = require("../Models/TodoModel");


let createTodo = async (req, res) => {
    try {
        const { userId, title, description, state } = req.body;
        console.log(req.body)
        let tid = uuid4();
        if (!userId) {
            return res.json({ msg: "User ID is required" });
        }

        await new todomodel({ _id: tid, userId, title, description, state }).save();
        return res.json({ msg: "New task added" });
    } catch (err) {
        console.log(err);
        return res.json({ msg: err.message });
    }
};

let getTodos = async (req, res) => {
    try {
        let data = await todomodel.find({ "userId": req.params.userId });
        return res.json(data);
    } catch (err) {
        return res.json({ msg: err.message });
    }
};

let getTodoById = async (req, res) => {
    try {
        let data = await todomodel.findOne({ "_id": req.params.id, "userId": req.params.userId });
        if (data) {
            return res.json(data);
        } else {
            return res.json({ msg: "To-do not found" });
        }
    } catch (err) {
        return res.json({ msg: err.message });
    }
};

let updateTodo = async (req, res) => {
    try {
        await todomodel.findByIdAndUpdate({ "_id": req.body._id, "userId": req.body.userId }, req.body);
        return res.json({ msg: "Task updated" });
    } catch (err) {
        return res.json({ msg: err.message });
    }
};

let deleteTodo = async (req, res) => {
    try {
        await todomodel.findByIdAndDelete({ "_id": req.params.id, "userId": req.params.userId });
        return res.json({ msg: "Task deleted" });
    } catch (err) {
        return res.json({ msg: err.message });
    }
};

let clearTodos = async (req, res) => {
    try {
        await todomodel.deleteMany({ "userId": req.params.userId });
        return res.json({ msg: "All tasks cleared" });
    } catch (err) {
        return res.json({ msg: err.message });
    }
};

module.exports = { createTodo, getTodos, getTodoById, updateTodo, deleteTodo, clearTodos };
