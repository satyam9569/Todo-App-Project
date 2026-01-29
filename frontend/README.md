# Todo Management Application (MERN Stack)

## 📌 Project Description
This is a **Todo Management Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

The application allows users to:
- Create a new todo item
- View all existing todo items
- Mark a todo as completed
- Delete a todo item

The project focuses on **core MERN functionality** rather than UI design.

---

## 🛠️ Tech Stack
### Frontend
- React.js
- Axios
- Basic CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure
TODO_APP/
│
├── backend/
│ ├── models/
│ │ └── todo.js
│ 
│ ├── app.js
│ ├── package.json
│
├── frontend/
│ ├── src/
│ │    ├── App.css
       ├── App.js
│ │    └── index.js
│ │ 
│ ├── package.json
│
└── README.md


---


---

## 🚀 Features
- Add new todo
- View all todos
- Mark todo as completed
- Delete todo
- REST API integration

---

## 🔗 Backend API Endpoints

| Method | Route | Description |
|------|------|------------|
| GET | `/api/todos` | Fetch all todos |
| POST | `/api/todos` | Add a new todo |
| PUT | `/api/todos/:id` | Update todo (mark completed) |
| DELETE | `/api/todos/:id` | Delete a todo |

---

## 🧩 Todo Model
```js
{
  title: String,
  completed: Boolean,
  createdAt: Date
}
```
## ⚙️Installation & Setup

git clone https://github.com/satyam9569/Todo-App-Project

cd backend
npm install
npm start

cd frontend
npm install
npm start
