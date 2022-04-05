import ChildComp from "./childComponent";
import React from "react";
function FunctionalComponent() {
  return (
    <div className="container" style={{color:"black"}} >
      <h1>Functional Component</h1>
      <p>This is a functional component</p>
      <ChildComp name="Functional Component" />
    </div>
  );
}

export default FunctionalComponent;