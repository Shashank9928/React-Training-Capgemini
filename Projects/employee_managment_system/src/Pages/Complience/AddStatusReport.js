import React from "react";
import axios from "axios";

export default function AddStatusReport() {

    // Function to send post request to server to rAdd status report
    const addStatusReport = () => {
        const URL = "http://127.0.0.1:8080/statusReport/addStatusReport";

        const statusReport = {
            "comments": "comments",
            "details": "First Status Report",
            "d_id": 1,
            "u_id": 1,
            "c_id": 6
        }
        axios.post(URL, statusReport)
            .then(res => {
                console.log(res);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
        alert("Status Report added successfully");
    }

    return <div>
        <h1>Add Status Report</h1>
        <button className="btn btn-primary" onClick={addStatusReport}>Add Status Report</button>
    </div>
}
