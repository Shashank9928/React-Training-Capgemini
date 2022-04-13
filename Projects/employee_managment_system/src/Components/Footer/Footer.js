import React from "react";
import "./css/footer.css";

export default function Footer() {

    return (
        <footer class="footer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <h2 class="footer-heading"><div class="logo">Employee.com</div></h2>
                        <p class="menu">
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
                <div class="row mt-5">
                    <div class="col-md-12 text-center">
                        <p class="copyright">
                            Copyright &copy; All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
}
