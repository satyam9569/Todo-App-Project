import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const ShowTodo = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    ShowTodo();
  }, []);

  const addTodo = async () => {
    await axios.post("http://localhost:5000/api/todos", { title });
    setTitle("");
    ShowTodo();
  };

  const completeTodo = async (id) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`);
    ShowTodo();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    ShowTodo();
  };

  return (

<div className="app">
  <h2>Todo App</h2>

  <div className="input-row">
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter todo"
    />
    <button onClick={addTodo}>Add</button>
  </div>

  <ol className="todo-list">
    {todos.map((todo) => (
      <li key={todo._id} className="todo-item">
        <div
          className={`todo-title ${
            todo.completed ? "completed" : ""
          }`}
        >
          {todo.title} {todo.completed ? "✅" : ""}
        </div>

        <div className="todo-date">
           {new Date(todo.createdAt).toLocaleDateString("en-IN")}
        </div>

        <div className="todo-actions">
          <button
            className="complete-btn"
            onClick={() => completeTodo(todo._id)}
          >
            Complete
          </button>
          <button
            className="delete-btn"
            onClick={() => deleteTodo(todo._id)}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ol>
</div>

  )}
export default App;
