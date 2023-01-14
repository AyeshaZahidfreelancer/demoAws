import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  useEffect(() => {
    console.log("heee heheehhehehe");
    axios
      .get(`/api/mysql`)
      .then((res) => {
        console.log("ress::", res);
      })
      .catch((err) => {
        console.log("error agya hy janiii::", err);
      });
    //eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
