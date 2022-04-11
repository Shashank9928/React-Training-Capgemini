import React from "react";
import axios from "axios";



export default function RaiseComplain() {

    // Function to send post request to server to raise complain
    const raiseComplain = () => {
        const URL = "http://127.0.0.1:8080/compliance/addCompliance";
        const complain = {
            "complianceType":"HardWare",
            "complianceDescription":"Screen Broken",
            "employeeCount":9,
            "stsCount":6,
            "complianceStatus":"vdvd",
            "d_id":4,
            "u_id":1
        }
        axios.post(URL, complain)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        alert("Complaint raised successfully");
    }


    return <div>
        <h1>Raise Complain</h1>
        <button className="btn btn-primary" onClick={raiseComplain}>Raise Complain</button>
    </div>
}
