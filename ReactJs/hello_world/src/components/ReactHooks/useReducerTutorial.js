import React from "react";
import { useReducer } from "react";

function UseReducerTutorial() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1, showText: "green" };
            case "DECREMENT":
                return { count: state.count - 1, showText: "red" };
            default:
                return { count: state.count };
        }
    };
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: "none",
        name: "Shashank",
    });

    return (
        <div>
            <div>Count value is {state.count}</div>
            <h2 style={{ color: state.showText }}>
                Text is being displayed during increment
            </h2>
            <button
                className="btn btn-success"
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                }}
            >
                Increment
            </button>
            <button
                className="btn btn-danger"
                onClick={() => {
                    dispatch({ type: "DECREMENT" });
                }}
            >
                Decrement
            </button>
        </div>
    );
}

export default UseReducerTutorial;