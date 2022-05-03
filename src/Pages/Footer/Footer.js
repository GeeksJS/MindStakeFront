import React from 'react'

export default function Footer() {


    const JoinNewsletters = (e) =>{
        e.preventDefault()
    }

    return (
        <React.Fragment>
            <footer className="site-footer with-footer-bg">
                <div className="footer-content-area">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="row justify-content-between">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="widget about-widget">
                                        <div className="footer-logo logo2">
                                            <img src="/assets/img/logo.png" alt="MindStake" />
                                        </div>
                                        <strong>
                                            Let's Bring Your Ideas To Life
                                        </strong>
                                        <div className="newsletter-form">
                                            <h5 className="form-title">Join Newsletters</h5>
                                            <form onSubmit={JoinNewsletters}>
                                                <input type="text" placeholder="Email Address" />
                                                <button type="submit">
                                                    <i className="fas fa-arrow-right" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="widget nav-widget">
                                        <h4 className="widget-title">Our Projects</h4>
                                        <ul>
                                            <li>
                                                <a>Illustration</a>
                                            </li>
                                            <li>
                                                <a>Cinema</a>
                                            </li>


                                            <li>
                                                <a>Art</a>
                                            </li>
                                            <li>
                                                <a>Music</a>
                                            </li>
                                            <li>
                                                <a>Gaming</a>
                                            </li>
                                            <li>
                                                <a>Technology</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget nav-widget">
                                        <h4 className="widget-title">Support</h4>
                                        <ul>
                                            <li>
                                                <a>Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a>Conditions</a>
                                            </li>
                                            <li>
                                                <a>Company</a>
                                            </li>
                                            <li>
                                                <a>Faq &amp; Terms</a>
                                            </li>
                                            <li>
                                                <a>Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-5 col-sm-8">
                                    <div className="widget contact-widget">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="info-list">
                                            <li>
                                                <span className="icon">
                                                    <i className="fas fa-phone" />
                                                </span>
                                                <span className="info">
                                                    <span className="info-title">Phone Number</span>
                                                    <a>71888888</a>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon">
                                                    <i className="fas fa-envelope-open" />
                                                </span>
                                                <span className="info">
                                                    <span className="info-title">Email Address</span>
                                                    <a>support@ms.tn</a>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon">
                                                    <i className="fas fa-map-marker-alt" />
                                                </span>
                                                <span className="info">
                                                    <span className="info-title">Locations</span>
                                                    <a>ESPRIT, TN</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <div className="row flex-md-row-reverse">
                                <div className="col-md-6">
                                    <ul className="social-icons">
                                        <li>
                                            <a>
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fab fa-behance" />
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <p className="copyright-text">
                                        © 2022 <a>MindStake</a>. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
