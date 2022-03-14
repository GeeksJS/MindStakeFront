import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <React.Fragment>
            <>
                <section className="page-title-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-8">
                                <h1 className="page-title">About Us</h1>
                            </div>
                            <div className="col-auto">
                                <ul className="page-breadcrumb">
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Page Title End ======*/}
                {/*====== About Section Start ======*/}
                <section className="about-section-three section-gap">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-10">
                                <div className="about-text mb-lg-50">
                                    <div className="common-heading mb-30">
                                        <span className="tagline">
                                            <i className="fas fa-plus" /> About us
                                            <span className="heading-shadow-text">About Us</span>
                                        </span>
                                        <h2 className="title">
                                            We Help To Improve Product Marketing
                                        </h2>
                                    </div>
                                    <p>
                                        MindStake is  a Crowdfunding platform which gives the opportunity to creators who have
                                        a project idea to collaborate with investors to build their own startup.

                                    </p>
                                    <ul className="check-list mt-30">
                                        <li className="wow fadeInUp" data-wow-delay="0s">
                                            <h5 className="title">Highest Success Rates</h5>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.1s">
                                            <h5 className="title">Raise Funds With Crowdfunding</h5>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.2s">
                                            <h5 className="title">Millions in Funding</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="about-gallery wow fadeInRight">
                                    <div className="img-one">
                                        <img src="https://funden.vercel.app/assets/img/about/about-gallery-1.jpg" alt="Image" />
                                    </div>
                                    <div className="img-two wow fadeInUp">
                                        <img src="https://funden.vercel.app/assets/img/about/about-gallery-2.jpg" alt="Image" />
                                    </div>
                                    <div className="pattern">
                                        <img
                                            src="assets/img/about/about-gallery-pattern.png"
                                            alt="Pattern"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== About Section End ======*/}
                {/*====== Feature Section Start ======*/}
                <section className="feature-section primary-soft-bg section-gap">
                    <div className="container">
                        <div className="common-heading text-center mb-30">
                            <span className="tagline">
                                <i className="fas fa-plus" /> What We Do
                                <span className="heading-shadow-text">Features</span>
                            </span>
                            <h2 className="title">Why choose us</h2>
                        </div>
                        <div className="row icon-boxes justify-content-center">
                            <div
                                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="icon-box mt-30">
                                    <div className="icon">
                                        <i className="flaticon-payment" />
                                    </div>
                                    <h5 className="title">Cryptocurrency</h5>
                                    <p>
                                        Your transactions are based on our new Cryptocurrency GEEKCOIN and they are
                                        safe and secure thanks to the Blockchain Technology.
                                    </p>
                                    <a href="project-details.html" className="link">
                                        <i className="fas fa-arrow-right" />
                                    </a>
                                    <span className="box-index">01</span>
                                    <div className="box-img">
                                        <img src="https://funden.vercel.app/assets/img/icon-box-bg.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="icon-box mt-30">
                                    <div className="icon">
                                        <i class="fab fa-facebook-messenger"></i>
                                    </div>
                                    <h5 className="title">Live Messenger</h5>
                                    <p>
                                        We provide a live messenger to assure a fluid communication
                                        between investors and entrepreneurs who seek to promote their projects.
                                    </p>
                                    <a href="project-details.html" className="link">
                                        <i className="fas fa-arrow-right" />
                                    </a>
                                    <span className="box-index">02</span>
                                    <div className="box-img">
                                        <img src="https://funden.vercel.app/assets/img/icon-box-bg.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="icon-box mt-30">
                                    <div className="icon">
                                        <i class="fas fa-robot"></i>
                                    </div>
                                    <h5 className="title">Chatbot</h5>
                                    <p>
                                        We provide a Chatbot powered by IA to guide you and help you
                                        find the best offers with a highly advanced recommendation system.
                                    </p>
                                    <a href="project-details.html" className="link">
                                        <i className="fas fa-arrow-right" />
                                    </a>
                                    <span className="box-index">03</span>
                                    <div className="box-img">
                                        <img src="https://funden.vercel.app/assets/img/icon-box-bg.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Feature Section End ======*/}
                {/*====== Team section Start ======*/}
                <section className="team-slider-area">
                    <div className="container mb-20">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="common-heading mb-40">
                                    <span className="tagline">
                                        <i className="fas fa-plus" /> Exclusive team
                                        <span className="heading-shadow-text">Members</span>
                                    </span>
                                    <h2 className="title">Meet Professional Team</h2>
                                </div>
                            </div>
                            <div className="col-auto">
                                <a href="contact.html" className="main-btn mb-40">
                                    Join Our Team <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid fluid-extra-padding">
                        <div className="row team-members team-slider">
                            <div className="col">
                                <div className="member-box">
                                    <div className="member-photo">
                                        <img src="assets/img/team/01.jpg" alt="Member" />
                                    </div>
                                    <div className="member-info">
                                        <h5 className="name">
                                            <a href="company-overview.html">Fitouri Ilyes</a>
                                        </h5>
                                        <span className="title">CEO &amp; Founder</span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="member-box">
                                    <div className="member-photo">
                                        <img src="assets/img/team/02.jpg" alt="Member" />
                                    </div>
                                    <div className="member-info">
                                        <h5 className="name">
                                            <a href="company-overview.html">Ben Haj Yahya Wajdi</a>
                                        </h5>
                                        <span className="title">Jonior Manager</span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="member-box">
                                    <div className="member-photo">
                                        <img src="assets/img/team/03.jpg" alt="Member" />
                                    </div>
                                    <div className="member-info">
                                        <h5 className="name">
                                            <a href="company-overview.html">Ben Gouta Monem</a>
                                        </h5>
                                        <span className="title">Digital Marketer</span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="member-box">
                                    <div className="member-photo">
                                        <img src="assets/img/team/04.jpg" alt="Member" />
                                    </div>
                                    <div className="member-info">
                                        <h5 className="name">
                                            <a href="company-overview.html">Barketi Achref</a>
                                        </h5>
                                        <span className="title">Web Developer</span>
                                        <ul className="social-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/*====== Team section End ======*/}
                {/*====== Counter With Image Text Block Start ======*/}

                {/*====== Counter With Image Text Block End ======*/}
                {/*====== Testimonials Start ======*/}
                <section className="testimonials-section section-gap">
                    <div className="container">
                        <div className="common-heading text-center mb-30">
                            <span className="tagline">
                                <i className="fas fa-plus" /> Clients Feedback
                                <span className="heading-shadow-text">Testimonials</span>
                            </span>
                            <h2 className="title">What People's Say</h2>
                        </div>
                        <div className="row justify-content-center testimonial-boxes square-shape-two">
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="testimonial-box-one mt-30">
                                    <div className="author-info">
                                        <div className="author-img">
                                            <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Thumb" />
                                        </div>
                                        <div>
                                            <h5 className="name">Joseph A. Anthony</h5>
                                            <p className="position">Web Developer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-desc">
                                        Quis autem vel eum reprehenderit quiea voluptate velit essenih
                                        lestiae conseqatur veillum dolorem
                                    </p>
                                    <div className="rating-wrap">
                                        <span>Rating</span>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="testimonial-box-one mt-30">
                                    <div className="author-info">
                                        <div className="author-img">
                                            <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Thumb" />
                                        </div>
                                        <div>
                                            <h5 className="name">Howard A. Guest</h5>
                                            <p className="position">Web Developer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-desc">
                                        Quis autem vel eum reprehenderit quiea voluptate velit essenih
                                        lestiae conseqatur veillum dolorem
                                    </p>
                                    <div className="rating-wrap">
                                        <span>Rating</span>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <div className="testimonial-box-one mt-30">
                                    <div className="author-info">
                                        <div className="author-img">
                                            <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Thumb" />
                                        </div>
                                        <div>
                                            <h5 className="name">Howard A. Guest</h5>
                                            <p className="position">Web Developer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-desc">
                                        Quis autem vel eum reprehenderit quiea voluptate velit essenih
                                        lestiae conseqatur veillum dolorem
                                    </p>
                                    <div className="rating-wrap">
                                        <span>Rating</span>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="testimonial-box-one mt-30">
                                    <div className="author-info">
                                        <div className="author-img">
                                            <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Thumb" />
                                        </div>
                                        <div>
                                            <h5 className="name">Joseph A. Anthony</h5>
                                            <p className="position">Web Developer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-desc">
                                        Quis autem vel eum reprehenderit quiea voluptate velit essenih
                                        lestiae conseqatur veillum dolorem
                                    </p>
                                    <div className="rating-wrap">
                                        <span>Rating</span>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <div className="testimonial-box-one mt-30">
                                    <div className="author-info">
                                        <div className="author-img">
                                            <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Thumb" />
                                        </div>
                                        <div>
                                            <h5 className="name">Howard A. Guest</h5>
                                            <p className="position">Web Developer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-desc">
                                        Quis autem vel eum reprehenderit quiea voluptate velit essenih
                                        lestiae conseqatur veillum dolorem
                                    </p>
                                    <div className="rating-wrap">
                                        <span>Rating</span>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.7s"
                            >
                                <div className="testimonial-box-one mt-30">
                                    <div className="author-info">
                                        <div className="author-img">
                                            <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Thumb" />
                                        </div>
                                        <div>
                                            <h5 className="name">Howard A. Guest</h5>
                                            <p className="position">Web Developer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-desc">
                                        Quis autem vel eum reprehenderit quiea voluptate velit essenih
                                        lestiae conseqatur veillum dolorem
                                    </p>
                                    <div className="rating-wrap">
                                        <span>Rating</span>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Testimonials End ======*/}
                {/*====== Partners Section With CTA Start ======*/}

            </>

        </React.Fragment>
    )
}
