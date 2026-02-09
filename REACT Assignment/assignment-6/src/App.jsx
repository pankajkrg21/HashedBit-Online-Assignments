import { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {

    if(task.trim() === "") return;

    const updatedList = [...todos, task];

  
    updatedList.sort((a,b)=> a.localeCompare(b));

    setTodos(updatedList);
    setTask(""); 
  }

  
  function deleteTask(index) {

    const newList = todos.filter((_, i) => i !== index);
    setTodos(newList);
  }

  return (

    <div className="main">

      <div className="todo">

        <h2>React Todo App</h2>

        <div className="inputBox">

          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />

          <button onClick={addTask}>Add</button>

        </div>

        <ul>

          {todos.map((item,index)=>(
            <li key={index}>

              <span>{item}</span>

              <button
                className="delete"
                onClick={()=>deleteTask(index)}
              >
                Delete
              </button>

            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}

export default App;
