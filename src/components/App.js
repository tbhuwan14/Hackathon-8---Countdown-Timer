import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState("");
  const [enterClicked, setEnterClicked] = useState(false);
  const enterPressed = (e) => {
    if (e.keyCode === 13) {
      if (value.match(/^[0-9]+$/)) {
        setEnterClicked(true);
        setCount(value);
      } else {
        setCount(0);
      }
      e.target.value = "";
    }
  };
  useEffect(() => {
    let intervalId;
    if (enterClicked) {
      intervalId = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }
    if (count == 0 && enterClicked) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [count, enterClicked]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={enterPressed}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
