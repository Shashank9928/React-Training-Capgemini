import React from "react";
import RaiseComplain from "./Pages/Complience/RaiseComplain";
import Complains from "./Pages/Complience/Complains";
import AddStatusReport from "./Pages/Complience/AddStatusReport";
import GetAllStatusReport from "./Pages/Complience/GetAllStatusReport";
import AddDepartment from "./Pages/Department/AddDepartment";
import DeleteDepartment from "./Pages/Department/DeleteDepartment";
import GetAllDepartment from "./Pages/Department/GetAllDepartment";
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
        </Switch>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
