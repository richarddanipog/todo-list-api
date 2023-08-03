const Todo = require("../models/todoModel");
const logger = require("../helpers/logger");

exports.getAllTodos = async (req, res) => {
  try {
    logger.info("Get all Todos");

    const todos = await Todo.find();

    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    logger.info("Get a single todo by ID");

    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    logger.info("Create a new todo");

    const todo = new Todo(req.body);
    await todo.save();

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    logger.info("Update a todo by ID");

    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    logger.info("Delete a todo by ID");

    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};
