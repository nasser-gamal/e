const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    const { content } = req.body;
    console.log("content", content);
    console.log(req.userId)
    const todo = new Todo({
      content,
      userId: req.userId,
    });
    todo.save();
    return res.status(200).json({ message: "Your Data Succesfully Saved" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.find({ userId: id });
    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { createTodo, getTodo };
