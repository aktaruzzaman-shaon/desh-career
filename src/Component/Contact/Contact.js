import React from 'react';
import './Contact.css'
import PageTitle from '../PageTitle/PageTitle';

const Contact = () => {
    return (
        <div>
            <PageTitle title={"Contact"}></PageTitle>
            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-8 col-md-8 col-sm-12 contat-style">
                        <h1 className='text-start text-black'>Contract Us</h1>
                        <p>If you want to contact us: you can send an email to <span></span>
                            <span><a href="">contact.deshcareer@gmail.com</a></span>
                        </p>
                        <p>If you want to meet with us, you can come to our office based on an appointment. </p>
                        <p>Our Office address:</p>
                        <p>House: 13/3,</p>
                        <p>Road: 2,</p>
                        <p>Shyamoly, Dhaka-1207</p>
                        <p>+8801880811047</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;