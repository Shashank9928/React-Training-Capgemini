import React, { useLayoutEffect } from "react";
import { useState, useReducer, useEffect, useRef } from "react";

// function BasicHook() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h4>Count is {count}</h4>
//       <button className="btn btn-secondary" onClick={increment}>
//         increment
//       </button>
//     </div>
//   );
// }

// function BasicHook() {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return { count: state.count + 1 };
//       case "DECREMENT":
//         return {
//           count: state.count - 1,
//         };
//       case "MULTIPLY":
//         return { count: state.count * action.Nr };
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

//   return (
//     <div>
//       <div>{state.count}</div>
//       <button
//         onClick={() => {
//           dispatch({ type: "INCREMENT" });
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "DECREMENT" });
//         }}
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "MULTIPLY", Nr: 5 });
//         }}
//       >
//         Multiply
//       </button>
//     </div>
//   );
// }

// function BasicHook(props) {
//   useEffect(() => {
//     console.log("use effect called");
//   }, [props.name]);
//   return (
//     <div>
//       basic hook with count {props.counter} and name is {props.name}
//     </div>
//   );
// }

// function BasicHook() {
//   const inputRef = useRef(null);
//   function focusElement() {
//     console.log(inputRef.current.value);
//     inputRef.current.focus();
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={focusElement}>Clikc</button>
//     </div>
//   );
// }

export function UseRefTutorial() {
  const inputRef = useRef(null);

  function focusInput() {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          focusInput();
        }}
      >
        Focus Input
      </button>
    </div>
  );
}

function UseLayoutTutorial() {
  useEffect(() => {
    console.log("use effect called");
  });
  useLayoutEffect(() => {
    console.log("use layout effect is called");
  });

  function delay() {
    console.log("delay");
    return setTimeout(() => {
      console.log("3 sec");
      return <div> hello</div>;
    }, 3000);
  }
  return <div>{delay()}</div>;
}
export default UseLayoutTutorial;