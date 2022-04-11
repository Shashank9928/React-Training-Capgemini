import React from "react";
import RaiseComplain from "./Pages/Complience/RaiseComplain";
import AllComplains from "./Pages/Complience/AllComplains";
import ComplainByUserId from "./Pages/Complience/UserComplain";
import AddStatusReport from "./Pages/Complience/AddStatusReport";
import GetAllStatusReport from "./Pages/Complience/GetAllStatusReport";
function App() {
  return (
    <div className="App">

      <RaiseComplain />
      <AllComplains />
      <ComplainByUserId />
      <AddStatusReport />
      <GetAllStatusReport />
    </div>
  );
}

export default App;
