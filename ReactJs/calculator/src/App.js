import React from "react";
import "./css/Style.css"
import Caculate from "./Components/CalCulateor/Calculate";
function App() {
  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-6">
          <Caculate />
        </div>
      </div>
    </div>

  );
}

export default App;
