import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  
  const todos = [
    { text: "Learn React", priority: 5, dueDate: new Date().toDateString() },
    {
      text: "Learn about APIs",
      priority: 4,
      dueDate: new Date(2020, 1, 23).toDateString(),
    },
    {
      text: "write TODO App",
      priority: 3,
      dueDate: new Date(2020, 1, 30).toDateString(),
    },
  ];
  const [tasks, setTasks] = useState([...todos]);

  const addTask = (newTask) => {    
    setTasks((prev) => {
      return [...prev, newTask];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> TODO React App </h1>{" "}
      </header>
      <div className="container p-4">
        <TodoForm addTask={addTask} />
        <div>
          <TodoList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
