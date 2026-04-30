import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <input type="text" placeholder="Enter task" />
      <button>Add</button>

      <div className="task">Sample Task</div>
    </div>
  );
}

  const [task, setTask] = useState("");

  // Save tasks to LocalStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  function addTask() {

    if (task === "") {
      alert("Enter a task");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }

  // Delete Task
  function deleteTask(index) {

    const newTasks = tasks.filter(function (t, i) {
      return i !== index;
    });

    setTasks(newTasks);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>Task Manager</h2>

      <input
        type="text"
        value={task}
        onChange={function (e) {
          setTask(e.target.value);
        }}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map(function (t, index) {
          return (
            <li key={index}>
              {t}

              <button
                onClick={function () {
                  deleteTask(index);
                }}
                style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
              >
                Delete
              </button>

            </li>
          );
        })}
      </ul>

    </div>
  );

export default App;