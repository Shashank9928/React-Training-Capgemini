import React from "react";
import { Component } from "react";
import axios from "axios";

export default class AxiosCalls extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const URL = "http://127.0.0.1:8080/compliance/getAllCompliance";
        axios.get(URL).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });



    }


    render() {
        return (
            <div>
                <h1>AXIEOS Requests</h1>
            </div>
        )
    }
} 