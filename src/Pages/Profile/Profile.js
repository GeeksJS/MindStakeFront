import React, { useEffect, useState } from 'react'
import './Profile.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'
import EditProfile from '../EditProfile/EditProfile'
import EditProfileInvestor from '../EditProfile/EditProfileInvestor'
import EditProfileUser from '../EditProfile/EditProfileUser'
import ChangePassword from '../EditProfile/ChangePassword'


export default function Profile() {
    const Connected = JSON.parse(localStorage.getItem('user'))
    console.log(Connected.UserName)
    const MySwal = withReactContent(Swal)
    console.log(Connected.Role)
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupPW, setOpenPopupPW] = useState(false)

    const Facebook = props => (
        <a>
            <i class="fab fa-facebook fa-3x icon-fb" style={{ marginRight: '10px' }}></i>
        </a>
    );

    const Twitter = props => (
        <a href='#'>
            <i class="fab fa-twitter-square fa-3x icon-twitter"></i>
        </a>
    );

    const LinkedIn = props => (
        <i class="fab fa-linkedin fa-3x icon-linkedin "></i>
    );

    return (
        <React.Fragment>
            <section className=" page-title-area1 ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">Profile</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container" style={{ textAlign: 'left' }}>


                <div className="card social-prof" style={{ zIndex: '999' }}>
                    <div className="card-body">
                        <button className="main-btn1" style={{ marginLeft: '1000px' }} onClick={() => setOpenPopup(true)}  >
                            Edit <i className="far fa-edit" />
                        </button>

                        <button class="btn" onClick={() => setOpenPopupPW(true)}> <i class="fas fa-cog" style={{ marginLeft: '10px' }} ></i></button>

                        <div className="wrapper" >
                            <img
                                src="https://prium.github.io/falcon/v3.8.0/assets/img/team/2.jpg"
                                alt=""
                                className="user-profile"
                            />
                            <h3>Jane Smith
                                &nbsp;<span
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    title=""
                                    data-bs-original-title="Verified"
                                    aria-label="Verified"
                                >

                                    <small
                                        className="fa fa-check-circle text-primary"
                                        data-fa-transform="shrink-4 down-2"
                                    />

                                </span></h3>
                            <p>Web Developer</p>

                        </div>
                        <div className="row justify-content-center">
                            <Facebook />
                            <Twitter />
                            <LinkedIn />
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body info-card social-about">
                                <h2 className="text-blue">About</h2>
                                <h4>
                                    <strong>About Me</strong>
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                                </p>
                                <h4 className="mb-3">
                                    <strong>Personal Info</strong>
                                </h4>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="social-info">
                                            <i className="fas fa-birthday-cake mr-2" />
                                            <span>15/08/1991</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="social-info">
                                            <i className="fas fa-map-marker-alt mr-2" />
                                            <span> New York</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="social-info">
                                            <i className="fas fas fa-users mr-2" />
                                            <span>Female</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="social-info">
                                            <i className="fas fa-briefcase mr-2" />
                                            <span>UI/UX Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="social-info">
                                            <i className="fas fas fa-mobile mr-2" />
                                            <span>8392832983</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="social-info">
                                            <i className="fas fas fa-envelope mr-2" />
                                            <span>like @example.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card info-card">
                            <div className="card-body">
                                <h2 className="text-blue">Skills</h2>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>HTML5</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>Bootstrap Framework</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>Vanilla Javascript</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>Angular Js</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>Adobe Photoshop</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>Adobe Illustrator</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>SASS/SCSS</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>WORDPRESS</h4>
                                        <div className="mb-3">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card info-card">
                            <div className="card-body">
                                <h2 className="text-blue">Education</h2>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>Pune University </strong>
                                        </h4>
                                        <p>May 2009 to June 2011 </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>Course: Gamification</strong>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>St Xavier Highschool</strong>
                                        </h4>
                                        <p>Aug 2004 to June 2009 </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>Bachelor - Computer Science</strong>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card info-card">
                            <div className="card-body">
                                <h2 className="text-blue">Work</h2>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>Creative Arts - 2016-19</strong>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>Web Media - 2014-16</strong>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>Global Infosoft - 2012-14</strong>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>
                                            <strong>Freelancer - 2011-12</strong>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {Connected.Role === "Creator" && openPopup && <EditProfile
                User_id={Connected.userId}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            ></EditProfile>}
            {Connected.Role === "SimpleUser" && openPopup && <EditProfileUser
                User_id={Connected.userId}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            ></EditProfileUser>}
            {Connected.Role === "Investor" && openPopup && <EditProfileInvestor
                User_id={Connected.userId}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            ></EditProfileInvestor>}
            <ChangePassword
                User_id={Connected.userId}
                openPopupPW={openPopupPW}
                setOpenPopupPW={setOpenPopupPW}></ChangePassword>
        </React.Fragment>
    )
}
