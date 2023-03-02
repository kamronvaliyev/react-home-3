import React, { useState } from "react";
import "./Main.css";
// import Button from"./button/Button";

export default function Main() {
  const [randomNum, setRandomNum] = useState(random(0, 100));
  const [enteredNum, setEnteredNum] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (randomNum === enteredNum) {
      alert("You win my friend!");
      setEnteredNum(random(0, 100));

			return
    }
    if (randomNum > enteredNum) alert("Higher");
    if (randomNum < enteredNum) alert("Lower ");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(evt) => setEnteredNum(+evt.target.value)}
        value={enteredNum}
        type="number"
      />
      <button type="submit">Click</button>
    </form>
  );
}

function random(start, end) {
  return Math.trunc(start + Math.random() * end);
}
