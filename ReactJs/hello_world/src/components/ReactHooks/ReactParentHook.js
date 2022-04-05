import React from "react";
import UseReducerTutorial from "./useReducerTutorial";
import UseStateTutorial from "./useStateTutorial";

function ReactParentHook() {
  return (
    <div>
      <h3 style={{fontWeight: 500 }}>UseState Demo</h3>
      <UseStateTutorial></UseStateTutorial>
      <h3 style={{ fontWeight: 500 }}>UseReducer Demo</h3>
      <UseReducerTutorial></UseReducerTutorial>
    </div>
  );
}

export default ReactParentHook;