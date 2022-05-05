import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkout from '../Checkout/Checkout';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';
import { NavDropdown } from 'react-bootstrap';
import './style.css'
import axios from 'axios';
import Swal from 'sweetalert2';
// import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';
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
    const theme = { "icon": { "borderColor": "#6113A3", "width": "24px" }, "unseenBadge": { "backgroundColor": "#DF4759" }, "header": { "backgroundColor": "#6113A3", "textColor": "#ffffff", "borderRadius": "16px" }, "footer": { "backgroundColor": "#6113A3", "textColor": "#ffffff", "borderRadius": "16px" }, "notification": { "default": { "textColor": "#15091F", "borderRadius": "8px", "backgroundColor": "#6113A3" }, "unseen": { "backgroundColor": "#6113A3" }, "unread": { "backgroundColor": "#6113A3" } } };
    // function changeLocale(l) {
    //     if (locale !== l) {
    //         i18n.changeLanguage(l);
    //     }
    // }

    const [walletInfo, setWalletInfo] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/wallet/${User.userId}`)
                .then(res => {
                    console.log(res.data)
                    setWalletInfo(res.data)

                })

        }
        fetchData().then(walletInfo)
    }, []);

    const bal = Number(walletInfo.balance)

    const activateAccount = (e) => {
        e.preventDefault()
        const data ={
            Email: User.Email
        }
        axios.post(`${process.env.REACT_APP_API_URL}/users/activate-account-email`,data)
            .then(
                Swal.fire(
                    'Done!',
                    'Activation email sent successfully!',
                    'success'
                )
                

            )
            .catch(err => {
            })
    }

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
                                                    <a href="/createproject">Create Project</a>
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

                                    {User.isActivated ?
                                        <div className='btn-group'>
                                            <div className="icon0 text-amount">

                                                <i className="fab fa-gg-circle fa-2x fa-spin"></i>
                                                {walletInfo && <span className='mr-30'>{bal.toFixed(0)}</span>}

                                            </div>
                                            <div className="btn-buy text-amount">

                                                <a href='https://buy.stripe.com/test_6oE9Ev0l2c6jepacMT' style={{ color: 'white', fontWeight: 'bold' }}>BUY</a>

                                            </div>
                                        </div>
                                        :
                                        <button onClick={activateAccount} className="main-btn1" style={{ marginLeft: '170px', backgroundColor: 'green', color: 'white' }}   >
                                            Activate account
                                        </button>
                                    }







                                    <div className="footer-widgets widget contact-widget li ml-30 mr--30">


                                        <li>
                                            <a>
                                                <span className="icon1">
                                                    <i className="far fa-bell" ></i>
                                                </span>
                                            </a>
                                        </li>

                                        {User.Role === "Creator" && <li>
                                            <Link to='/pricing'>
                                                <span className="icon1">
                                                    <i className="fas fa-rocket"></i>
                                                </span>
                                            </Link>
                                        </li>}


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
                                                    <NavLink hidden={!localStorage.getItem("token")} to={'/wallet'}>My Wallet</NavLink>
                                                </li>
                                                <li key={User.userId}>
                                                    <NavLink hidden={!localStorage.getItem("token")} to={'/bookmarks'}>My Bookmarks</NavLink>
                                                </li>
                                                {User.Role === "Creator" &&
                                                    <li key={User.userId}>
                                                        <NavLink hidden={!localStorage.getItem("token")} to={'/listproposal/' + User.userId}>List Proposal</NavLink>
                                                    </li>}
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

            </header >


        </React.Fragment >
    )
}
