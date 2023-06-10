import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Body = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                    
                    <h1 className='text-start'>Get Smarter about your career</h1>
                    <p className='text-start'>Get the <strong>5-minute mewsletter</strong> keeping about smart career</p>

                    {/* Body join free part */}
                    <form action="" className="shadow-sm p-2 rounded">
                        <div className="input-group my-3">
                            <div className="input-group-prepend p-2">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <input type="text" className="form-control border-0 mx-3" placeholder="Your E-mail address " ></input>
                            <button className='btn text-white border-0 text-bg-danger rounded btn-lg '>Join Free</button>
                        </div>
                    </form>

                    <p className='text-start mt-3'>
                        We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Body;