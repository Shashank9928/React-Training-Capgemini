import React from "react";
import "./css/footer.css";

export default function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading"><div className="logo">Employee.com</div></h2>
                        <p className="menu">
                            <a href="#">Home</a>
                            <a href="#">Employee</a>
                            <a href="#">Department</a>
                            <a href="#">Raise Complain</a>
                            <a href="#">Complains</a>
                            <a href="#">Add Status Report</a>
                            <a href="#">Get All Status Report</a>
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                            Copyright &copy; All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
}
