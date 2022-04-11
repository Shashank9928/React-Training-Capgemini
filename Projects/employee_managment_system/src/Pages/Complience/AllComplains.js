import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AllComplains() {
    const [complains, setComplains] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const URL = "http://127.0.0.1:8080/compliance/getAllCompliance";
        axios.get(URL)
            .then(res => {
                setComplains(res.data);
                setIsLoading(false);
            }
            )
            .catch(err => {
                console.log(err);
            }   
            )
    }, []);

    return (
        <div>
            <h1>All Complains</h1>
            {isLoading ? <h1>Loading...</h1> :
                <table className="table table-striped">
                    <thead>
                        <tr>    
                            <th>Compliance Type</th>
                            <th>Compliance Description</th>
                            <th>Employee Count</th>
                            <th>STS Count</th>
                            <th>Compliance Status</th>
                            <th>Department</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complains.map(complain => (
                            <tr key={complain.id}>
                                <td>{complain.complianceType}</td>
                                <td>{complain.complianceDescription}</td>
                                <td>{complain.employeeCount}</td>
                                <td>{complain.stsCount}</td>
                                <td>{complain.complianceStatus}</td>
                                <td>{complain.d_id}</td>
                                <td>{complain.u_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}