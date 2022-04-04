import React, { Component } from "react";
class ChildComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " Initial State",
      counter: 0,
    };
  }
  handleClick() {
    alert("this is a child method");
  }
  changeState() {
    this.setState({
      title: "Changed State",
    });
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  updateName(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h4>received from parent = {this.props.name}</h4>
        <h4>received from state(same class component) = {this.state.title}</h4>
        <button onClick={() => this.changeState()}> Change State</button>
        {/* <button onClick={this.changeTitle}> Change Title</button> */}

        <button onClick={this.changeState.bind(this)}> Change State</button>

        <button className="btn btn-primary" onClick={this.handleClick}>
          Click me
        </button>
        <br />
        <h4>Counter = {this.state.counter}</h4>
        <button
          className="btn btn-danger"
          onClick={() => this.incrementCounter()}
        >
          {" "}
          Increment{" "}
        </button>
        <br />

        <label> Name </label>
        <input
          type="text"
          value={this.props.name}
          onChange={(e) => this.updateName(e)}
        />

        <br/>
        <button className="btn btn-success" onClick={() => this.props.greet()}> Greet </button>
      </div>
    );
  }
}

export default ChildComp;
