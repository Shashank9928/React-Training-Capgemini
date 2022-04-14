import React from "react";
import "./css/home.css";

export default function Home() {
    return (
        <div>
            <header className="header">

                <div className="overlay"></div>


                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src="https://res.cloudinary.com/hunter-corp/video/upload/v1649910372/PromoVideo_fjcip7.mp4" type="video/mp4" />
                </video>


                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">Employee Managment System</h1>
                            <p className="lead mb-0">Managging the employees</p>
                        </div>
                    </div>
                </div>
            </header>
            {/* Service Section Start */}
            <section class="god-section service-section">
                <div class="container">
                    <div class="row d-flex service-info">
                        <div class="col-md-6 col-lg-3 d-flex">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="">
                                        <i class="fa-solid fa-list-check"></i>
                                    </span>
                                </div>
                                <h3 class="mb-4">Managment</h3>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="">
                                        <i class="fa-solid fa-briefcase"></i>
                                    </span>
                                </div>
                                <h3 class="mb-4">Employee</h3>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="">
                                        <i class="fa-solid fa-building-user"></i>
                                    </span>
                                </div>
                                <h3 class="mb-4">Department</h3>

                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 d-flex">
                            <div class="align-self-stretch box p-4 text-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="">
                                        <i class="fa-solid fa-users"></i>
                                    </span>
                                </div>
                                <h3 class="mb-4">Users</h3>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Service Section End */}


        </div>
    );
}