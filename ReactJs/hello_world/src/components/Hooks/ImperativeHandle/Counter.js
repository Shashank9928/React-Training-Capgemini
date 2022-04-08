import React, { useState, forwardRef, useImperativeHandle } from "react";

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({ increment }), [{}]);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button className="btn btn-primary" onClick={() => increment()}>Child click</button>
    </div>
  );
});

export default Counter;