import "./App.css";
import { useEffect, useState } from "react";

function App() {
  //debe reflejar un estado hacia el valor del input
  const [input1, setInput1] = useState("");
  const handleChange = (event) => {
    console.log(event);
  };
  return (
    <div className="container">
      <form className="form">
        <div className="flex">
          <label htmlFor="input1">Input:</label>
          <input id="input1" onChange={handleChange} value={input1} />
        </div>
      </form>
    </div>
  );
}

export default App;
