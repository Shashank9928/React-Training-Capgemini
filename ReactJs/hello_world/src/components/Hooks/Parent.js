import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import React, { useState } from "react";
import BasicHook from "./BasicHooks";

function ParentHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Monika");
  function increment() {
    setCount(count + 1);
  }
  function changeName() {
    setName("Monika Abhijeet");
  }
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={increment}>increment</button>
      <BasicHook counter={count} name={name}></BasicHook>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default ParentHook;