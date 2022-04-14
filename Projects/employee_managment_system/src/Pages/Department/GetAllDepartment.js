import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export default function GetAllDepartment()
{
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [maxPage, setMaxPage] = useState(1);
    const [userRole, setUserRole] = useState("Admin");

    useEffect(() => {
        if(userRole === "Admin"){
        let URL = "http://127.0.0.1:8080/departmentController/getAllDepartment";
        axios.get(URL)
            .then(res => {
                setDepartments(res.data);
                setIsLoading(false);
                console.log(res.data);
            })
             .catch(err => {
                 console.log(err);
             })
        }}, []);
        // else {
        // const URL ="http://127.0.0.1:8080/departmentController/getAllDepartmentByPagination/" + maxPage;
        //  axios.get(URL)
        //     .then(res => {
        //         setDepartments(res.data);
        //         setIsLoading(false);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    // }}, []);

    return (
        <div>
            <section>
                <div className="container py-2">
                    <div className="color3 head-font-1">
                        <h1>Departments</h1>
                        <hr />
                    </div>

                    {isLoading ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div> :
                    <div>
                        {departments.map(department => (
                            <GetAllDepartment key={department.id} department={department}/>



                        ))}   
                </div>
}
</div>
            </section>
        </div>
    );
}
