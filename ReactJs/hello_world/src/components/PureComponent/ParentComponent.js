import React, { PureComponent } from "react";
import PureComp from "./Purecomponent";
import RegComp from "./RegularComponent";

export default class ParentComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            name: "Test"
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: "Test1"
            });
        }, 2000);
    }


    render() {
        console.log("------------------Parent Component------------------");
        console.log("Parent Component: ", this.state.name);

        return (
            <div className="container" >
                <h1>Parent Component</h1>
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />
            </div>
        );
    }
}