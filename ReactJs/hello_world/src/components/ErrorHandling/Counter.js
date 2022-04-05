import React from "react";
import { useErrorHandler } from "react-error-boundary";

function Counter() {
  const MAX_COUNT_ALLOWED = 5;
  const [count, setCount] = React.useState(0);
  const handleError = useErrorHandler();
  function incrementCounter() {
    try {
      if (count === MAX_COUNT_ALLOWED) {
        throw new Error("count limit exceeded");
      } else {
        setCount(count + 1);
      }
    } catch (e) {
      console.log(e);
      handleError(e);
    }
  }
  return (
    <div>
      Counter value is new {count}
      <button onClick={incrementCounter}>increment</button>
    </div>
  );
}

export default Counter;