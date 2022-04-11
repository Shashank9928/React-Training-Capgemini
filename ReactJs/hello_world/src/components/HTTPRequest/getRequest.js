import React, { Component } from "react";


class GetRequest extends Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => console.log(json))


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'John', username: 'Doe' })
        };
        fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
            .then(response => response.json())
            .then(json => console.log(json));


        const requestPut = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'John', username: 'Doe' })
        };
        fetch('https://jsonplaceholder.typicode.com/users/1', requestPut)
            .then(response => response.json())
            .then(json => console.log(json));


        const requestPatch = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Rockford', username: 'Belman' })
        };
        fetch('https://jsonplaceholder.typicode.com/users/2', requestPatch)
            .then(response => response.json())
            .then(json => console.log(json));


        fetch('https://jsonplaceholder.typicode.com/users/2')
            .then(response => response.json())
            .then(json => console.log(json));


    }


    render() {
        return (
            <div>
                <h1>Requests</h1>
            </div>
        )
    }
}


export default GetRequest;