import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosconfig from '../../axiosConfig'

export default function Contact() {
    const [newComplaint, setNewComplaint] = useState({})
    const Connected = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const CreateComplaint = (e) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, send it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("hahaa")

                axiosconfig.post(`/complaints/addcomplaint/`, data)
                    .then(res => {
                        console.log("Sent")
                    })
                    .catch(err => {
                        console.error(err);
                    })
                Swal.fire(
                    'Sent!',
                    'Your complaint has been delivered.',
                    'success'
                ).then(
                    navigate('/contact')
                )
            }
        })
    

        const data = {
            Description: newComplaint.Description,
            Title: newComplaint.Title,
            User: Connected.userId
        }



    }
    const handleChange = (e) => {
        e.preventDefault()
        setNewComplaint({ ...newComplaint, [e.target.name]: e.target.value })
    }

    return (
        <React.Fragment>
            <>
                <section className="page-title-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-8">
                                <h1 className="page-title">Contact Us</h1>
                            </div>
                            <div className="col-auto">
                                <ul className="page-breadcrumb">
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Page Title End ======*/}
                {/*====== Contact Section Start ======*/}
                <section className="contact-section section-gap-extra-bottom">
                    <div className="container">
                        {/* Contact Info Start */}
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lx-4 col-lg-5 col-sm-10">
                                <div className="contact-info-text mb-md-70">
                                    <div className="common-heading mb-30">
                                        <span className="tagline">
                                            <i className="fas fa-plus" /> Contact
                                            <span className="heading-shadow-text">Contact</span>
                                        </span>
                                        <h2 className="title">Find Us On Social Media</h2>
                                    </div>
                                    <div style={{ marginTop: '80px' }}>
                                        <Facebook />
                                        <Twitter />
                                        <LinkedIn />
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 offset-xl-1">
                                <div className="contact-info-boxes">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-6 col-sm-10">
                                            <div
                                                className="info-box text-center wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="icon">
                                                    <i className="flaticon-place" />
                                                </div>
                                                <div className="info-content">
                                                    <h5>Our Location</h5>
                                                    <p>ESPRIT, Pole Technologique, Ariana, Tunis</p>
                                                </div>
                                            </div>
                                            <div
                                                className="info-box text-center mt-30 mb-sm-30 wow fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                <div className="icon">
                                                    <i className="flaticon-envelope" />
                                                </div>
                                                <div className="info-content">
                                                    <h5>Email Address</h5>
                                                    <p>
                                                        support@mindstake.com <br />
                                                        www.mindstake.tn
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-10">
                                            <div
                                                className="info-box text-center wow fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                <div className="icon">
                                                    <i className="flaticon-phone-call-1" />
                                                </div>
                                                <div className="info-content">
                                                    <h5>Support 24/7</h5>
                                                    <p>
                                                        (+216)71888888 <br />
                                                        (+216)71999999
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact Info End */}
                        <div className="contact-from-area">
                            <div className="row no-gutters">
                                <div className="col-lg-5">
                                    <div className="contact-maps">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1080.235767244713!2d10.189454883048041!3d36.89895189079932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb055e36e611%3A0xd904d2bf4308a2c!2sEsprit!5e0!3m2!1sen!2stn!4v1588968285265!5m2!1sen!2stn"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact-form">
                                        <form onSubmit={handleSubmit(CreateComplaint)}>
                                            <h3 className="form-title">Send Us your complaint</h3>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-field mb-25">
                                                        <label htmlFor="name">Your Name</label>
                                                        <input
                                                            type="text"
                                                            value={Connected?.UserName}
                                                            disabled =  {Connected ? true : false}
                                                            placeholder= " Name"
                                                            id="name"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6" >
                                                    <div className="form-field mb-25"  >
                                                        <label htmlFor="email">Email Address</label>
                                                        <input
                                                            type="text"
                                                            value={Connected?.Email }
                                                            disabled =  {Connected ? true : false}
                                                            placeholder = "@email.com"
                                                            id="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-field mb-25">
                                                        <label htmlFor="subject">Title</label>
                                                        <input
                                                            className="form-control"
                                                            name="Title" id="Title"
                                                            type="text"
                                                            placeholder="Title"
                                                            value={newComplaint.Title} onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-field mb-30">
                                                        <label htmlFor="message">Write Message</label>
                                                        <textarea
                                                            name='Description'
                                                            id="Description"
                                                            placeholder="Description"
                                                            value={newComplaint.Description} onChange={handleChange}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-field">
                                                        <button className="main-btn" type='submit'>
                                                            Send Us Your Complaint <i className="fas fa-arrow-right" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </React.Fragment>
    )
}
const Facebook = props => (
    <a>
        <i class="fab fa-facebook fa-4x icon-fb" style={{ marginRight: '10px' }}></i>
    </a>
);

const Twitter = props => (
    <a>
        <i class="fab fa-twitter-square fa-4x icon-twitter"></i>
    </a>
);

const LinkedIn = props => (
    <i class="fab fa-linkedin fa-4x icon-linkedin "></i>
);