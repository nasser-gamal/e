const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    const { content } = req.body;
    const todo = await new Todo({
      content,
    });
    todo.save();
    return res.status(200).json({ message: "Your Data Succesfully Saved" });
  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { createTodo, getTodo };
