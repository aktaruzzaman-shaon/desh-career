import React from 'react';
import BrandImg from "../../Asset/BrandImage.png"
import { Link } from 'react-router-dom';

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
                                    <Link className='nav-link active fw-bold text-danger' to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                   <Link className='nav-link  fw-bold text-black' to="/">Privacy Policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link  fw-bold text-black' to="/">Terms Condition</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link  fw-bold text-black' to="/">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link  fw-bold text-black ' to="contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link  fw-bold text-black' to="/">Advertise</Link>
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