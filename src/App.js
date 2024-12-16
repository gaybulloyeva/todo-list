import { useState } from "react"
import './App.css';


function App() {

  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState("")
  console.log(newTask)

  const addTask = () => {
    if (newTask !== "") {
      setTask([...task, newTask])
      setNewTask("")
    }
  }

  const deleteTask = (index) => {
    const updatedTask = task.filter((item, i) => i !== index)
    console.log(updatedTask)
    setTask(updatedTask)
  }


  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Task list</h1>
        </header>
        <div className="task-input">
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {task.map((item, index) => (
            <li key={index}>
              {item}<button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;