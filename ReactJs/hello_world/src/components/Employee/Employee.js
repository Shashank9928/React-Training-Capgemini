import React from "react";

function Employee(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.designation}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default Employee;
