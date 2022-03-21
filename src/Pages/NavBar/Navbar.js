import React, { Component, Fragment, useEffect, useState } from 'react'
import { Link, NavLink, Route, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkout from '../Checkout/Checkout';

export default function Navbar() {
    var classNameHome = "site-header sticky-header transparent-header topbar-transparent";
    var classNameOther = "site-header sticky-header";


    const [trans, setTrans] = React.useState(false);
    const [active, setActive] = React.useState("");

    const [path, setPath] = useState("/");
    const navigate = useNavigate();
    const User = JSON.parse(localStorage.getItem('user'))
    const push = () => {
        window.history.pushState(null, "payment", "localhost:3000/off");

        window.history.replaceState(null, "payment", "localhost:3000/off")
    }
    

    return (

        <React.Fragment >


            <header className={window.location.pathname === "/" || window.location.pathname === "/chatbot" ? classNameHome : classNameOther}>
                <div className="header-topbar d-none d-sm-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <ul className="contact-info">
                                    <li>
                                        <a href="#">
                                            <i className="far fa-envelope" /> support@mindstake.tn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="far fa-map-marker-alt" /> 250 Main Street, 2nd
                                            Floor, TN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-auto d-none d-md-block">
                                <ul className="social-icons">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <div className="container">
                        <div className="navbar-inner">
                            <div className="logo1">
                                <a href="index.html">
                                    <img src="../assets/img/logo.png" alt="MindStake" />
                                </a>
                            </div>
                            <div className="nav-menu" >
                                <ul>
                                    <li className={window.location.pathname === "/" && "current"}>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className={(window.location.pathname === "/projects" || window.location.pathname === "/createproject" ) && "current"}>
                                        <NavLink to="projects"  >Project </NavLink>
                                        <ul className="submenu">
                                                
                                                <li>
                                                <NavLink to="createproject">Create Project</NavLink>
                                                </li>
                                                <li>
                                                <NavLink to="myprojects">My Projects</NavLink>
                                                </li>
                                                <li>
                                                <NavLink to="projects">All Projects</NavLink>
                                                </li>
                                            </ul>
                                    </li>
                                    {/* <li className={window.location.pathname === "/Organization" && "current"}>
                                        <NavLink to="/organizations">Organizations</NavLink>
                                        <ul className="submenu">
                                            <li>
                                                <a href="about.html">About</a>
                                            </li>
                                            <li>
                                                <a href="company-overview.html">Company Overview</a>
                                            </li>
                                            <li>
                                                <a href="team-member.html">Team Member</a>
                                            </li>

                                        </ul>
                                    </li> */}
                                    <li className={window.location.pathname === "/about" && "current"}>
                                        <NavLink to="/about">About</NavLink>
                                    </li>


                                    <li className={window.location.pathname === "/contact" && "current"}>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                    <div className='btn-group'>
                                        <div className="icon0 text-amount">

                                            <i class="fab fa-gg-circle fa-2x fa-spin"></i>
                                            <span className='mr-30'>88</span>

                                        </div>
                                        <div className="btn-buy text-amount">
                                            
                                                <a href='https://buy.stripe.com/test_6oE9Ev0l2c6jepacMT'  style={{color:'white',fontWeight:'bold'}}>BUY</a>
                                            
                                        </div>
                                    </div>

                                    <div className="footer-widgets widget contact-widget li ml-30 mr--30">

                                        <li>
                                            <Link to='/pricing'>
                                                <span className="icon1">
                                                    <i class="fas fa-rocket"></i>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <span className="icon1">
                                                    <i class="far fa-bell" ></i>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <span className="icon1">
                                                    <i class="far fa-user" ></i>
                                                </span>
                                            </a>
                                            <ul className="submenu">
                                                <li key={User.userId}>
                                                    <NavLink hidden={!localStorage.getItem("token")} to={'/profile/' + User.userId}>Profile</NavLink>
                                                </li>
                                                <li>
                                                <a href='/login' hidden={localStorage.getItem("token")}>Login</a>
                                                <a href='/login'hidden={!localStorage.getItem("token")} onClick={()=>localStorage.clear()} >Logout</a>
                                                </li>
                                            </ul>
                                        </li>


                                    </div>
                                </ul>


                            </div>





                        </div>
                    </div>
                </div>
                <div className="mobile-menu-panel">
                    <div className="panel-logo">
                        <a href="index.html">
                            <img src="assets/img/logo-white.png" alt="Funden" />
                        </a>
                    </div>
                    <ul className="panel-menu">
                        <li className="current">
                            <a href="index.html">Home</a>
                            <ul className="submenu">
                                <li>
                                    <a href="index.html">Home One</a>
                                </li>
                                <li>
                                    <a href="index-2.html">Home Two</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="project-1.html">Project</a>
                            <ul className="submenu">
                                <li>
                                    <a href="project-1.html">Project One</a>
                                </li>
                                <li>
                                    <a href="project-2.html">Project Two</a>
                                </li>
                                <li>
                                    <a href="project-3.html">Project Three</a>
                                </li>
                                <li>
                                    <a href="project-details.html">Project Details</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="events.html">Events</a>
                        </li>
                        <li>
                            <a href="news-standard.html">News</a>
                            <ul className="submenu">
                                <li>
                                    <a href="news-standard.html">News Standard</a>
                                </li>
                                <li>
                                    <a href="news-details.html">News Details</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                            <ul className="submenu">
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="company-overview.html">Company Overview</a>
                                </li>
                                <li>
                                    <a href="team-member.html">Team Member</a>
                                </li>
                                <li>
                                    <a href="pricing.html">Pricing</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>

                </div>
            </header>

            

        </React.Fragment>
    )
}
