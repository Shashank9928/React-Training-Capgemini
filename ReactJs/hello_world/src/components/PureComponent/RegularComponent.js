import React,{Component} from "react";

export default class RegComp extends Component {
    render() {
        console.log("------------------Regular Component------------------");
        console.log("Regular Component: ", this.props.name);
        return (
            <div>
                <h1>Regular Component</h1>
                <p>
                    RegComp: {this.props.name}
                </p>
            </div>
        );
    }
}
