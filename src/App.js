import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="container">
      <form className="form">
        <div className="flex">
          <label htmlFor="input1">Input:</label>
          <input id="input1" value={"INICIAL"} />
        </div>
      </form>
    </div>
  );
}

export default App;
