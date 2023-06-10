import React from 'react';
import BrandImg from "../../Asset/BrandImage.png"
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='shadow-sm p-4'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={BrandImg} alt="Bootstrap" width="170" height="75"></img>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <NavLink to='/' className=" fw-bold navlinks-style ">Home</NavLink>
                                <NavLink to='/' className=" fw-bold navlinks-style ">Privacy Policy</NavLink>
                                <NavLink to='/' className=" fw-bold navlinks-style ">Terms Condition</NavLink>
                                <NavLink to='/' className=" fw-bold navlinks-style ">About Us</NavLink>
                                <NavLink to='contact' className=" fw-bold navlinks-style ">Contact Us</NavLink>
                                <NavLink to='/' className=" fw-bold navlinks-style ">Advertise</NavLink>
                                <div className='ms-3'>
                                    <button className='text-white border-0 text-bg-danger p-2 rounded'>Join Now</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;