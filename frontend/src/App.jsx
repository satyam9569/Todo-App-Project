import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  
async function ShowTodo(){
  const res = await axios.get("http://localhost:5000/todos");
  setTodos(res.data);
}
  useEffect(() => {
    ShowTodo();
  }, []);

  async function addTodo(id){
    await axios.post("http://localhost:5000/todos", { title });
    setTitle("");
    ShowTodo();
  }

  async function completeTodo (id){
    await axios.put(`http://localhost:5000/todos/${id}`);
    ShowTodo();
  }

  async function deleteTodo(id){
    await axios.delete(`http://localhost:5000/todos/${id}`);
    ShowTodo();
  }
  return (
<div className="app">
  <h2>Todo App</h2>
    <form onSubmit={addTodo} className="form">
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter todo"
      required
    />
      <button>Add</button>
    </form>
  <ol className="todo-list">
    {todos.map((todo) => (
      <li key={todo._id} className="todo-item">
        <div>
          {todo.title} {todo.completed ? <span className="com">✔</span> : ""}
        </div>

        <div className="todo-date">
           {new Date(todo.createdAt).toLocaleDateString("en-IN")}
        </div>

        <div className="todo-actions">
          {todo.completed ? "":
          <button
          className="complete-btn"
          onClick={() => completeTodo(todo._id)}
        >
          Complete
        </button>
        }
          
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
