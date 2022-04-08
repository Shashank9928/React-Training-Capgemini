import React, { useState, useRef } from "react";
import Counter from "./Counter";
function ParentImperative(props) {
  const buttonRef = useRef(null);
  return (
    <div>
      <Counter ref={buttonRef} />
      <button className="btn btn-primary" onClick={() => buttonRef.current.increment()}>
        Parent click
      </button>
    </div>
  );
}

export default ParentImperative;