import React from 'react';
import BrandImg from "../../Asset/BrandImage.png"

const Navbar = () => {

    return (
        <div className='shadow-sm p-4'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={BrandImg} alt="Bootstrap" width="170" height="75"></img>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active fw-bold text-danger" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-black fw-bold" href="#">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-black fw-bold" href="#">Terms Condition</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-black fw-bold" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-black fw-bold" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-black fw-bold" href="#">Advertise</a>
                                </li>
                                <li className="nav-item ms-2 ">
                                    <button className='text-white border-0 text-bg-danger p-2 rounded'>Join Now</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;