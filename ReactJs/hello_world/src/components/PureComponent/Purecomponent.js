import React,{PureComponent} from "react";


export default class PureComp extends PureComponent {
    render() {
        console.log("------------------Pure Component------------------");
        console.log("Pure Component: ", this.props.name);
        return (
            <div>
                <h1>PureComponent</h1>
                <p>
                    PureComp: {this.props.name}
                </p>
            </div>
        );
    }
}

