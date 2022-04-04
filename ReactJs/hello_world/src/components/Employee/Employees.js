import React from "react";
import Employee from "./Employee";
function Employees() {
  const empList = [
    {
      id: 1,
      name: "John",
      designation: "Developer",
      email: "John@gmail.com",
    },
    {
      id: 2,
      name: "Jane",
      designation: "Designer",
      email: "Jane@gmail.com",
    },
    {
      id: 3,
      name: "Jill",
      designation: "Manager",
      email: "jill@gmail.com",
    },
    {
      id: 4,
      name: "Jack",
      designation: "Manager",
      email: "jack@gmail.com",
    },
    {
      id: 5,
      name: "zack",
      designation: "Salse",
      email: "zack@gmail.com",
    },
  ];

  return (
    <div className="container">
      <h1>Employee List</h1>

      <table className="table table-striped table-dark">
        <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {empList.map((emp) => {
          return (
            <Employee
              key={emp.id}
              name={emp.name}
              designation={emp.designation}
              email={emp.email}
            />
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
