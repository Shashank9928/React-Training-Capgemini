import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
  } from "react";
  
  const Counter = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({ increment }), [{}]);
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
      <div>
        <button className="btn btn-primary" onClick={increment}>click</button>
        <h2>Count: {count}</h2>
      </div>
    );
  });
  
  export default Counter;