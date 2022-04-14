import React from "react";
// import RaiseComplain from "./Pages/Complience/RaiseComplain";
// import Complains from "./Pages/Complience/Complains";
// import AddStatusReport from "./Pages/Complience/AddStatusReport";
// import GetAllStatusReport from "./Pages/Complience/GetAllStatusReport";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Nav";
function App() {
  return (
    <div className="App">
      {/* <RaiseComplain />
      <Complains />
      <AddStatusReport />
      <GetAllStatusReport /> */}
      <Navbar />
      <div className="clear"></div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
