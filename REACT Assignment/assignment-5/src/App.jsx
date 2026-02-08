import { useState } from "react";
import "./App.css";

function App() {

  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [result,setResult] = useState("");

  function calculate(type){

    const a = Number(num1);
    const b = Number(num2);

    if(type === "+") setResult(a + b);
    if(type === "-") setResult(a - b);
    if(type === "*") setResult(a * b);
    if(type === "/") setResult(a / b);
  }

  return (

    <div className="main">

      <div className="calculator">

        <h2>React Calculator</h2>

        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e)=>setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e)=>setNum2(e.target.value)}
        />

        <div className="buttons">
          <button onClick={()=>calculate("+")}>+</button>
          <button onClick={()=>calculate("-")}>−</button>
          <button onClick={()=>calculate("*")}>×</button>
          <button onClick={()=>calculate("/")}>÷</button>
        </div>

        <h3>Result: {result}</h3>

      </div>

    </div>
  );
}

export default App;
