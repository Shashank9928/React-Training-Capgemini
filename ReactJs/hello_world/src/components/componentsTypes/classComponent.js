import { Component } from "react";
import ChildComp from "./childComponent";
class ClassComponent extends Component {

  greetMe() {
    alert("Hello from Parent component");
  }
   render() {
    return (
      <div className="container">
        <h1>Class Component</h1>
        <p>This is a class component</p>
        <ChildComp name="Child Component" 
          greet={this.greetMe}/>
      </div>
    );
  }
}

export default ClassComponent;
