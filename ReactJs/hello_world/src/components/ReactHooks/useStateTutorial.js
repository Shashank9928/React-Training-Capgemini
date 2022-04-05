import React from "react";
import { useState } from "react";

function UseStateTutorial() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count value is {count}</h3>
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseStateTutorial;