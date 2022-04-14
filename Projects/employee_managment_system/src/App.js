import React from "react";

// Complience Module Imports
import RaiseComplain from "./Pages/Complience/RaiseComplain";
import Complains from "./Pages/Complience/Complains";
import AddStatusReport from "./Pages/Complience/AddStatusReport";
import GetAllStatusReport from "./Pages/Complience/GetAllStatusReport";
// Department Module Imports
import AddDepartment from "./Pages/Department/AddDepartment";
import DeleteDepartment from "./Pages/Department/DeleteDepartment";
import GetAllDepartment from "./Pages/Department/GetAllDepartment";
// Employee module Imports
import AddEmployee from "./Components/Employee/AddEmployee";
import ListEmployee from "./Components/Employee/ListEmployee";
import UpdateEmployee from "./Components/Employee/UpdateEmployee";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/raisecomplain" >

            <RaiseComplain />
          </Route>
          <Route path="/complains" >
            <Complains />
          </Route>
          <Route path="/addstatusreport" >
            <AddStatusReport />
          </Route>
          <Route path="/getallstatusreport" >
            <GetAllStatusReport />
          </Route>
          <Route path="/adddepartment" >
            <AddDepartment />
          </Route>
          <Route path="/deletedepartment" >
            <DeleteDepartment />
          </Route>
          <Route path="/getalldepartment" >
            <GetAllDepartment />
          </Route>
          <Route path="/addemployee" >
            <AddEmployee />
          </Route>
          <Route path="/listemployee" >
            <ListEmployee />
          </Route>
          <Route path="/updateemployee" >
            <UpdateEmployee />
          </Route>
        </Switch>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
