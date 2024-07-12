import React, { useState } from 'react';
import { RiMailLine } from '@remixicon/react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        ).then(
            (result) => {
                toast.success('Message sent!', { position: toast.POSITION.TOP_RIGHT });
                setIsSubmitting(false);
                e.target.reset(); // Clears the form after sending the email
            },
            (error) => {
                toast.error('Something went wrong, please try again later', { position: toast.POSITION.TOP_RIGHT });
                setIsSubmitting(false);
            }
        );
    };

    return (
        <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contactForm" name="contactForm" onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Steve Milner"
                                    required
                                    data-error="Please enter your Name"
                                />
                                <label htmlFor="name" className="for-icon">
                                    <i className="far fa-user"></i>
                                </label>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="name@email.com"
                                    required
                                    data-error="Please enter your Email"
                                />
                                <label htmlFor="email" className="for-icon">
                                    <i className="far fa-envelope"></i>
                                </label>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Write Your message"
                                    required
                                    data-error="Please Write your Message"
                                ></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button type="submit" className="theme-btn" disabled={isSubmitting}>
                                    Send Me Message <RiMailLine size={16} />
                                </button>
                                <div id="msgSubmit" className="hidden"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
