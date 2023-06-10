import React from 'react';
import BrandImg from '../../Asset/BrandImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#0F0D32" }}>
            <div className="container ">

                {/* Social Media part */}
                <div className="row">
                    <div className="col-12 mt-5">
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} className='socialIcon-Style' /></a>
                        <a href=""><FontAwesomeIcon icon={faFacebookF}
                            className='socialIcon-Style' /></a>
                        <a href=""><FontAwesomeIcon icon={faYoutube} className='socialIcon-Style' /></a>
                    </div>
                </div>

                {/* Privay support part of footer */}
                <div className="row mt-4 d-flex">
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                        <div className='text-start ms-4 brandImg-alignment'>
                            <img src={BrandImg} alt="Bootstrap" width="150" height="65" ></img>
                        </div>
                        <p className='footerBrand-About'>Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. </p>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 privacy-Style mt-2'>
                        <h4>Privacy And Terms
                        </h4>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms Condition</a>
                        <a href="">FAQ</a>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 privacy-Style support-alignment mt-2 text-end'>
                        <h4>Support </h4>
                        <a href="">Affilate Link</a>
                        <a href="">Contact Us</a>
                        <a href="">Advertise with us</a>
                    </div>
                </div>
                <hr className='border mb-1' />

                {/* Copy right part */}
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 copy-right'><p className='text-start'>&copy; 2023 Newsletter Email service: ALL copy reserved</p></div>
                    <div className='col-sm-12 col-md-6 col-lg-6 termCoockie-Style text-end'>
                        <a href="">Terms</a>
                        <a href="">Cookie Policy</a>
                        <a href="">Terms</a>
                        <a href="">Privacy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;