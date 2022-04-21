import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkout from '../Checkout/Checkout';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';
import { NavDropdown } from 'react-bootstrap';

export default function Navbar() {
    var classNameHome = "site-header sticky-header transparent-header topbar-transparent";
    var classNameOther = "site-header sticky-header other ";

    const { locale } = useContext(LocaleContext);

    const [trans, setTrans] = React.useState(false);
    const [active, setActive] = React.useState("");

    const [path, setPath] = useState("/");
    const navigate = useNavigate();
    const User = JSON.parse(localStorage.getItem('user'))
    const push = () => {
        window.history.pushState(null, "payment", "localhost:3000/off");

        window.history.replaceState(null, "payment", "localhost:3000/off")
    }

    // function changeLocale(l) {
    //     if (locale !== l) {
    //         i18n.changeLanguage(l);
    //     }
    // }

    return (

        <React.Fragment >


            <header className={(window.location.pathname === "/" || window.location.pathname === "/chatbot") ? classNameHome : classNameOther}>
                <div className="header-topbar d-none d-sm-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <ul className="contact-info">
                                    <li>
                                        <a>
                                            <i className="far fa-envelope" /> support@mindstake.tn
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fas fa-map-marker-alt" /> 250 Main Street, 2nd
                                            Floor, TN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <a href="#" onClick={changeLocale('en')}>English</a>
                            <a href="#" onClick={changeLocale('ar')}>العربية</a> */}
                            {/* <div className="col-auto d-none d-md-block">
                                <ul className="social-icons">
                                    <li>
                                        <a>
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fab fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="header-topbar d-none d-sm-block">
                    <div class="alert alert-danger border-2 d-flex align-items-center" style={{width:'60%',marginLeft:'20%'}} role="alert">
                        <div class=" me-3 icon-item" ><span class="fas fa-times-circle text-danger fs-3"></span></div>
                        <p class="mb-0 flex-1">A simple danger alert—check it out!</p><button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div> */}
                <div className="navbar-wrapper">
                    <div className="container">
                        <div className="navbar-inner">
                            <div className="logo1">
                                <NavLink to='/'>
                                    <img src="/assets/img/logo.png" alt="MindStake" />
                                </NavLink>
                            </div>
                            <div className="nav-menu" >
                                <ul>
                                    <li className={window.location.pathname === "/" && "current"}>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className={(window.location.pathname === "/projects" || window.location.pathname === "/createproject" || window.location.pathname === "/myprojects") && "current"}>
                                        <NavLink to="projects"  >Project </NavLink>
                                        <ul className="submenu">
                                            {User.Role === "Creator" &&
                                                <div><li>
                                                    <NavLink to="createproject">Create Project</NavLink>
                                                </li>
                                                    <li>
                                                        <NavLink to="myprojects">My Projects</NavLink>
                                                    </li></div>
                                            }
                                            <li>
                                                <NavLink to="projects">All Projects</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={window.location.pathname === "/about" && "current"}>
                                        <NavLink to="/about">About</NavLink>
                                    </li>
                                    <li className={window.location.pathname === "/contact" && "current"}>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                    {
                                        localStorage.getItem('user') ? <li className={window.location.pathname === "/messenger" && "current"}>
                                            <NavLink to="/messenger">Messenger</NavLink>
                                        </li> : null
                                    }


                                    <div className='btn-group'>
                                        <div className="icon0 text-amount">

                                            <i className="fab fa-gg-circle fa-2x fa-spin"></i>
                                            <span className='mr-30'>88</span>

                                        </div>
                                        <div className="btn-buy text-amount">

                                            <a href='https://buy.stripe.com/test_6oE9Ev0l2c6jepacMT' style={{ color: 'white', fontWeight: 'bold' }}>BUY</a>

                                        </div>
                                    </div>

                                    <div className="footer-widgets widget contact-widget li ml-30 mr--30">

                                        <li>
                                            <Link to='/pricing'>
                                                <span className="icon1">
                                                    <i className="fas fa-rocket"></i>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a>
                                                <span className="icon1">
                                                    <i className="far fa-bell" ></i>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a>
                                                <span className="icon1">
                                                    <i className="far fa-user" ></i>
                                                </span>
                                            </a>
                                            <ul className="submenu">
                                                <li key={User.userId}>
                                                    <NavLink hidden={!localStorage.getItem("token")} to={'/profile/' + User.userId}>Profile</NavLink>
                                                </li>
                                                <li key={User.userId}>
                                                    <NavLink hidden={!localStorage.getItem("token")} to={'/bookmarks'}>My Bookmarks</NavLink>
                                                </li>
                                                <li>
                                                    <a href='/login' hidden={localStorage.getItem("token")}>Login</a>
                                                    <a href='/login' hidden={!localStorage.getItem("token")} onClick={() => localStorage.clear()} >Logout</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </header>


        </React.Fragment>
    )
}
