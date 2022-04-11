import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function GetAllStatusReport() {
    const [statusReports, setStatusReports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        const URL = "http://127.0.0.1:8080/statusReport/allStatusReport";
        axios.get(URL)
            .then(res => {
                setStatusReports(res.data);
                setIsLoading(false);
                console.log(res.data);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }, []);

    return (
        <div>
            <h1>Status Report</h1>
            {isLoading ? <h1>Loading...</h1> :

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>comments</th>
                            <th>details</th>
                            <th>d_id</th>
                            <th>u_id</th>
                            <th>c_id</th>
                            <th>createdDate</th>

                        </tr>
                    </thead>
                    <tbody>
                        {statusReports.map(statusReport => (
                            <tr key={statusReport.statusReportId}>
                                <td>{statusReport.comments}</td>
                                <td>{statusReport.details}</td>
                                <td>{statusReport.d_id}</td>
                                <td>{statusReport.u_id}</td>
                                <td>{statusReport.c_id}</td>
                                <td>{statusReport.createdDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            }
        </div>
    );



}