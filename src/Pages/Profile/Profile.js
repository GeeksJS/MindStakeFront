import React, { useEffect, useState } from 'react'
import './Profile.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link, useParams } from 'react-router-dom'
import EditProfile from '../EditProfile/EditProfile'
import EditProfileInvestor from '../EditProfile/EditProfileInvestor'
import EditProfileUser from '../EditProfile/EditProfileUser'
import ChangePassword from '../EditProfile/ChangePassword'
import axios from 'axios'
import { faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons'


export default function Profile() {
    let { id } = useParams()
    const Connected = JSON.parse(localStorage.getItem('user'))
    const MySwal = withReactContent(Swal)
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupPW, setOpenPopupPW] = useState(false)
    const [Profile, setProfile] = useState()
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
    console.log("userId", Connected.userId, "id", id)
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (Connected.userId && id) {
                    if (Connected.userId === id) {
                        await axios.get(`http://localhost:3000/users/${id}`).then(res => setProfile(res.data[0]));
                        

                    }
                    else {
                        console.log("kelma o5ra")
                        await axios.get(`http://localhost:3000/users/${id}`).then(res => setProfile(res.data[0]));
                    }
                }
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(Profile);

    }, []);

    if (Profile) {
        return (

            <React.Fragment>
                <section className=" page-title-area1 ">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-8">
                                <h1 className="page-title">Profile </h1>
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
                                    src={`http://localhost:3000/uploads/images/${Profile.ImageProfile}`}
                                    alt=""
                                    className="user-profile"
                                />
                                <h3>
                                    {Profile.UserName} {console.log(Profile)}
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

                                <p></p>

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
                                        <embed src={`http://localhost:3000/uploads/cv/${Profile.Cv}`} type="application/pdf" width="100%" height="600px" />
                                    </p>
                                    <h4 className="mb-3">
                                        <strong>Personal Info</strong>
                                    </h4>

                                    <div className="row">
                                        <div className="col-6">
                                            <div className="social-info">
                                                <i className="fas fas fa-users mr-2" />
                                                <span>{Profile.FistName.charAt(0).toUpperCase() + Profile.FistName.slice(1)}</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="social-info">
                                                <i className="fas fa-briefcase mr-2" />
                                                <span>{Profile.LastName.charAt(0).toUpperCase() + Profile.LastName.slice(1)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="social-info">
                                                <i className="fas fas fa-mobile mr-2" />
                                                <span>{Profile.Phone}</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="social-info">
                                                <i className="fas fas fa-envelope mr-2" />
                                                <span>{Profile.Email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card info-card">
                                <div className="card-body">
                                    <h2 className="text-blue">Account Info</h2>
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h4>
                                                    <strong>Startup Name </strong>
                                                </h4>
                                                <p>{Profile.StartupName}  </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4>
                                                    <strong>Creator Type</strong>
                                                </h4>
                                                <p>
                                                {Profile.Typecreator}
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4>
                                                    <strong>{Profile.Role}</strong>
                                                </h4>
                                                <p>Aug 2004 to June 2009 </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4>
                                                    <strong>State</strong>
                                                </h4>
                                                <p>
                                                    {!Profile.isActivated && <p>False</p>}
                                                    {Profile.isActivated && <p>True</p>}
                                                </p>
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
                                    <h2 className="text-blue">My Project</h2>
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

                {
                    Connected.Role === "Creator" && openPopup && <EditProfile
                        User_id={Connected.userId}
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    ></EditProfile>
                }
                {
                    Connected.Role === "SimpleUser" && openPopup && <EditProfileUser
                        User_id={Connected.userId}
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    ></EditProfileUser>
                }
                {
                    Connected.Role === "Investor" && openPopup && <EditProfileInvestor
                        User_id={Connected.userId}
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    ></EditProfileInvestor>
                }
                <ChangePassword
                    User_id={Connected.userId}
                    openPopupPW={openPopupPW}
                    setOpenPopupPW={setOpenPopupPW}></ChangePassword>
            </React.Fragment >
        )
    } else {
        return (<div>&nbsp;</div>)
    }
}