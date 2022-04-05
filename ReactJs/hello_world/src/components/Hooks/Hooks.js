import React from "react";

function Hooks() {
  const [count, setCount] = React.useState(0);
  const [name, setTitle] = React.useState("Initial Title");

  function changeTitle(title) {
    setTitle(title);
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="container" >
      <h1>Hooks</h1>
    <button className="btn btn-primary"  onClick={() => changeTitle("New Title")}> Click </button>
    <button className="btn btn-primary"  onClick={increment}> Increment </button>
        <h2>{name}</h2>
        <h2>{count}</h2>
    </div>
  );
}

export default Hooks;
