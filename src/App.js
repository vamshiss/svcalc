import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");
  const handler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <center>
        <h1> SV calci </h1>
        <input
          type="text"
          size="70"
          width="40px"
          value={input}
          name="input"
          placeholder="Enter your Values"
          onChange={handler}
        />
        <br />{" "}
        <button id="primary" onClick={() => setResult(eval(input))}>
          Result
        </button>
        <button id="clr" onClick={() => setInput("") + setResult("0")}>
          Clear
        </button>
        <h3 style={{ fontSize: "40px" }}>
          Result is :<span id="res"> {result} </span>
        </h3>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "+")}>+</button>
        <button onClick={() => setInput(input + "-")}>-</button>
        <br />
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "*")}>*</button>
        <button onClick={() => setInput(input + "/")}>/</button>
        <br />
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput(input + "0")}>0</button>
        <button onClick={() => setInput("") + setResult("0")}>clr</button>
      </center>
    </div>
  );
}
