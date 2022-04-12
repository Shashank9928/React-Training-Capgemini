import React from "react";
import axios from "axios";
import "./css/RaiseComplain/raisecomplain.css";
import "./css/RaiseComplain/Responsive/raisecomplainresponsive.css";


export default function RaiseComplain() {

    const [complianceType, setComplianceType] = React.useState("");
    const[complianceDescription, setComplianceDescription] = React.useState("");
    const [employeeCount, setEmployeeCount] = React.useState("");
    const[stsCount, setStsCount] = React.useState("");

    const handleComplianceType = (event) => {
        setComplianceType(event.target.value);
    }

    const handleComplianceDescription = (event) => {
        setComplianceDescription(event.target.value);
    }

    const handleEmployeeCount = (event) => {
        setEmployeeCount(event.target.value);
    }

    const handleStsCount = (event) => {
        setStsCount(event.target.value);
    }

    // Function to send post request to server to raise complain
    const raiseComplain = () => {
        const URL = "http://127.0.0.1:8080/compliance/addCompliance";
        const complain = {
            "complianceType": complianceType,
            "complianceDescription": complianceDescription,
            "employeeCount": employeeCount,
            "stsCount": stsCount,
            "complianceStatus": "Processing",
            "d_id": 4,
            "u_id": 1
        }
        axios.post(URL, complain)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        alert("Complain raised successfully");
    }


    return <div className="container" >

            <div className="color3 head-font-1" >
                <h1>Raise Complain</h1>
                <hr />
            </div>
        <section className="query">

            <div className="flex-row container">
                <div className="left">

                    <form >
                        <div className="input__wrapper">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                id="complainType"
                                placeholder="Complain Type"
                                required
                                onChange={handleComplianceType}
                                value={complianceType}
                            />
                        </div>
                        <div className="input__wrapper">
                            <input
                                className="input"
                                type="number"
                                name="employeeCount"
                                id="employeeCount"
                                placeholder="Employee Count"
                                required
                                onChange={handleEmployeeCount}
                                value={employeeCount}
                            />
                        </div>
                        <div className="input__wrapper">
                            <input
                                className="input"
                                type="number"
                                name="stsCount"
                                id="stsCount"
                                placeholder="Sts Count"
                                required
                                onChange={handleStsCount}
                                value={stsCount}
                            />
                        </div>
                        <div className="input__wrapper">
                            <textarea
                                name="complianceDescription"
                                className="input"
                                id="complainDescription"
                                cols="50"
                                rows="4"
                                placeholder="Write your message here"
                                required
                                onChange={handleComplianceDescription}
                                value={complianceDescription}
                            ></textarea>
                        </div>
                        <button className="btn form-btn" id="form-submit-btn" onClick={raiseComplain} disabled={!complianceType || !complianceDescription || !stsCount || !employeeCount} >
                            Raise Complain
                        </button>
                    </form>
                </div>
                <div className="right">
                    <img
                        src="https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=281&q=80"
                        alt=""
                    />
                </div>
            </div>
        </section>
    </div>
}
