import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({ title: req.body.title });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update todo
router.put("/:id", async (req, res) => {
     const {id}=req.params
  try {
    const updated = await Todo.findByIdAndUpdate(id,
      { completed: true },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE todo
router.delete("/:id", async (req, res) => {
    const {id}=req.params
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
