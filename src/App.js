import React, { useState } from "react";
import "./styles.css";
const flagDictionary = {
  "🇺🇸": "United States",
  "🇦🇺": "Australia",
  "🇨🇦": "Canada",
  "🇲🇾": "Malaysia",
  "🇯🇵": "Japan",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland",
  "🇦🇷": "Argentina"
};
var knowFlags = Object.keys(flagDictionary);

export default function App() {
  const [flagName, setflagName] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;
    var flagName = flagDictionary[userInput];
    if (flagName === undefined) {
      flagName = "Sorry, This flag is not present in our database";
    }
    setflagName(flagName);
  }

  function flagClickHandler(flag) {
    var flagName = flagDictionary[flag];
    setflagName(flagName);
  }

  return (
    <div className="App">
      <div className="flag-interpreter-container">
        <h1>Flag Interpreter</h1>
        <input onChange={flagInputHandler} />
        <div className="flagname-text">{flagName}</div>
        <p>Flags available in our database</p>
        <div className="svg-container">
          {knowFlags.map(function (flag) {
            return (
              <span
                className="flag-svg"
                onClick={() => flagClickHandler(flag)}
                key={flag}
              >
                {flag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
