
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv";
import Todo from "./models/todo.js"
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
 function connectMongo(){
  try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("Dabase Connected---------")
  }catch(error){
    console.log(error)
  }
}

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const newTodo = new Todo({ title: req.body.title });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.put("/todos/:id", async (req, res) => {
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
app.delete("/todos/:id", async (req, res) => {
    const {id}=req.params
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.listen(process.env.PORT, () =>{
  console.log(`Server running on port ${process.env.PORT}`);
  connectMongo();
}
);
