import React, { Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Review from '../Chatbot/Review'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'


export default function Home() {

    return (
        <React.Fragment>

            <section className="hero-area-one">
                <div className="hero-text">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <span className="tagline wow fadeInUp" data-wow-delay="0.3s">
                                    Crowdfounding Platform
                                </span>
                                <h1 className="title wow fadeInUp" data-wow-delay="0.4s">
                                    Raise Hand to Promote Best Projects
                                </h1>
                                <span className="tagline wow fadeInUp" data-wow-delay="0.3s">
                                    Let's Bring Your Ideas To Life
                                </span>
                                <Link
                                    to="/projects"
                                    className="main-btn wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    Explore Projects <i className="far fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-shapes">
                        <div className="hero-line-one">
                            <img src="../public/assets/img/hero/hero-line.png" alt="Line" />
                        </div>
                        <div className="hero-line-two">
                            <img src="../public/assets/img/hero/hero-line-2.png" alt="Line" />
                        </div>
                        <div className="dot-one" />
                        <div className="dot-two" />
                    </div>
                </div>
                <div className="hero-images">
                    <div
                        className="hero-img image-small fancy-bottom wow fadeInLeft"
                        data-wow-delay="0.6s"
                    >
                        <img src="assets/img/hero/hero-one-small.jpeg" alt="Image" />
                    </div>
                    <div className="hero-img main-img wow fadeInUp" data-wow-delay="0.5s">
                        <img src="assets/img/hero/hero-one-big.jpeg" alt="Image" />
                    </div>
                    <div
                        className="hero-img image-small fancy-top wow fadeInRight"
                        data-wow-delay="0.7s"
                    >
                        <img src="assets/img/hero/hero-one-small-2.jpeg" alt="Image" />
                    </div>
                </div>
            </section>
            <section className="popular-categories section-gap">
                <div className="container">
                    <div className="categories-header">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="common-heading mb-30">
                                    <span className="tagline">
                                        <i className="fas fa-plus" /> what we do
                                        <span className="heading-shadow-text">Category</span>
                                    </span>
                                    <h2 className="title">Popular Categories</h2>
                                </div>
                            </div>
                            {/* <div className="col-auto">
                                <a href="project-1.html" className="main-btn mb-30">
                                    View All Category <i className="far fa-angle-right" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="row justify-content-center fancy-icon-boxes">
                        <div
                            className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0s"
                        >
                            <div className="fancy-box-item mt-30">
                                <div className="icon">
                                    <i className="flaticon-reading-book" />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a href="project-details.html">Education</a>
                                    </h4>
                                    <p>School, Collage &amp; University</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="fancy-box-item mt-30">
                                <div className="icon">
                                    <i className="flaticon-stethoscope" />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a href="project-details.html">Medical &amp; Health</a>
                                    </h4>
                                    <p>School, Collage &amp; University</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <div className="fancy-box-item mt-30">
                                <div className="icon">
                                    <i className="flaticon-tshirt-1" />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a href="project-details.html">Clothes</a>
                                    </h4>
                                    <p>School, Collage &amp; University</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="fancy-box-item mt-30">
                                <div className="icon">
                                    <i className="flaticon-video-camera" />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a href="project-details.html">Video &amp; Films</a>
                                    </h4>
                                    <p>School, Collage &amp; University</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="fancy-box-item mt-30">
                                <div className="icon">
                                    <i className="flaticon-project-management" />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a href="project-details.html">Technology</a>
                                    </h4>
                                    <p>School, Collage &amp; University</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="fancy-box-item mt-30">
                                <div className="icon">
                                    <i className="flaticon-salad" />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a href="project-details.html">Organic Foods</a>
                                    </h4>
                                    <p>School, Collage &amp; University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section-one">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-start justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="">
                                <img src="assets/img/hero/crypto.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
                            <div className="about-text mt-md-70 mb-md-50">
                                <div className="common-heading mb-30">
                                    <span className="tagline">
                                        <i className="fas fa-plus" /> What we do
                                        <span className="heading-shadow-text">Cryptocurrency</span>
                                    </span>
                                    <h2 className="title">Cryptocurrency</h2>
                                </div>
                                <p>
                                    Your transactions are based on our new Cryptocurrency GEEKCOIN and they are
                                    safe and secure thanks to the Blockchain Technology.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="container">
                    <div className="row align-items-center justify-content-lg-start justify-content-center">

                        <div className="col-xl-4 col-lg-5 col-md-10 ">
                            <div className="about-text mt-md-70 mb-md-50">
                                <div className="common-heading mb-30">
                                    <span className="tagline">
                                        <i className="fas fa-plus" /> What we do
                                        <span className="heading-shadow-text">Messenger</span>
                                    </span>
                                    <h2 className="title">Live Messenger</h2>
                                </div>
                                <p>
                                    We provide a live messenger to assure a fluid communication
                                    between investors and entrepreneurs.
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-9 offset-xl-1">
                            <div className="">
                                <img src="assets/img/hero/messenger.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="container">
                    <div className="row align-items-center justify-content-lg-start justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="">
                                <img src="assets/img/hero/chatbot.jpeg" alt="Image" />
                            </div>

                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
                            <div className="about-text mt-md-70 mb-md-50">
                                <div className="common-heading mb-30">
                                    <span className="tagline">
                                        <i className="fas fa-plus" /> What we do
                                        <span className="heading-shadow-text">Chatbot</span>
                                    </span>
                                    <h2 className="title">Chatbot</h2>
                                </div>
                                <p>
                                    We provide a Chatbot powered by IA to guide you and help you
                                    find the best offers with a highly advanced recommendation system.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>



            <section className="project-section project-section-extra-gap secondary-bg">
                <div className="container-fluid fluid-extra-padding">
                    <div className="common-heading text-center color-version-white mb-60">
                        <span className="tagline">
                            <i className="fas fa-plus" /> Popular Projects
                            <span className="heading-shadow-text">Our Projects</span>
                        </span>
                        <h2 className="title">Explore Our Projects</h2>
                    </div>
                    <div className="row project-slider-one project-items project-style-one no-shadow">
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-details.jpeg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Video &amp; Movies</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/team/03.jpeg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            Best Romantic &amp; Action English Movie Release in 2022.
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">79%</span>
                                        </div>
                                        <div className="stats-bar" data-value={79}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-02.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Educations</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            Needs Close Up Students Class Room In University
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">87%</span>
                                        </div>
                                        <div className="stats-bar" data-value={87}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-03.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Technology</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            Original Shinecon VR Pro Virtual Reality 3D Glasses VRBOX
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">85%</span>
                                        </div>
                                        <div className="stats-bar" data-value={85}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-04.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Clothes</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            Fundraising For The People And Causes You Care About
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">83%</span>
                                        </div>
                                        <div className="stats-bar" data-value={83}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-05.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Covid -19</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            COVID-19 Vaccine Have Already Begun Introduced Countries
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">93%</span>
                                        </div>
                                        <div className="stats-bar" data-value={93}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-06.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Business</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            Mobile First Is Just Not Goodies Enough Meet Journey
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">70%</span>
                                        </div>
                                        <div className="stats-bar" data-value={70}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-07.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Technology</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            Fundraising For The People And Causes You Care About
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">81%</span>
                                        </div>
                                        <div className="stats-bar" data-value={81}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-08.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Mobile Kits</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            COVID-19 Vaccine Have Already Begun Introduced Countries
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">73%</span>
                                        </div>
                                        <div className="stats-bar" data-value={73}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-item">
                                <div
                                    className="thumb"
                                    style={{
                                        backgroundImage: "url(assets/img/project/project-grid-09.jpg)"
                                    }}
                                />
                                <div className="content">
                                    <div className="cats">
                                        <a href="#">Business</a>
                                    </div>
                                    <div className="author">
                                        <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <h5 className="title">
                                        <a href="project-details.html">
                                            Mobile First Is Just Not Goodies Enough Meet Journey
                                        </a>
                                    </h5>
                                    <div className="project-stats">
                                        <div className="stats-value">
                                            <span className="value-title">
                                                Raised of <span className="value">$59,689</span>
                                            </span>
                                            <span className="stats-percentage">75%</span>
                                        </div>
                                        <div className="stats-bar" data-value={75}>
                                            <div className="bar-line" />
                                        </div>
                                    </div>
                                    <span className="date">
                                        <i className="far fa-calendar-alt" /> 25 February 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter-section-one mt-negative">
                <div className="container primary-bg">
                    <div className="row counter-boxes justify-content-xl-between justify-content-center">
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding" />
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">3598</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">We’ve Project Complate</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding" />
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">9634</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">Global Partners</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding" />
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">8565</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">Awards Winning</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                            <div className="counter-box mb-40 icon-left">
                                <div className="icon white-color">
                                    <i className="flaticon-crowdfunding" />
                                </div>
                                <div className="content white-color">
                                    <div className="count-wrap">
                                        <span className="count">4756</span>
                                        <span className="suffix">+</span>
                                    </div>
                                    <h6 className="title">Active Volunteer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />
            <section className="emergency-project-with-cta">
                <div className="container">
                    <div
                        className="cta-box cta-double-content"
                        style={{ backgroundImage: "url(assets/img/cta/01.jpg)" }}
                    >
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-5 col-md-9">
                                <div className="content">
                                    <h2 className="cta-title">Start Funding your projects</h2>
                                    <p>
                                        Add your project idea and we will help you bring it to life.
                                    </p>
                                    <a href="events.html" className="main-btn">
                                        Add Project <i className="far fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-1 cta-double-content-gap" />
                            <div className="col-xl-4 col-lg-5 col-md-9">
                                <div className="content">
                                    <h2 className="cta-title">Give a boost to your Project </h2>
                                    <p>
                                        You can boost a project and make it more visible
                                        and reachable by buying a pack.
                                    </p>
                                    <a href="events.html" className="main-btn">
                                        Buy Pack<i className="far fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emergency-project-slider">

                </div>
            </section>
            <section className="partners-section section-gap section-border-bottom justify-content-center">
                <div className="container">
                    <div className="about-text mt-md-70 mb-md-50">
                        <div className="common-heading mb-30">
                            <span className="tagline">
                                <i className="fas fa-plus" /> Our Partners
                                <span className="heading-shadow-text">Partners</span>
                            </span>
                            <h2 className="title">Trusted Partners</h2>
                        </div>
                    </div>
                    <div className="row partners-logos-one">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo  mt-30">
                                <a href="#">
                                    <h1 className='partner-img'>BIAT</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#">
                                    <h1 className='partner-img'>AMEN</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#">
                                    <h1 className='partner-img1'>Samsung</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#">
                                    <h1 className='partner-img1'>Orange</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#">
                                    <h1 className='partner-img'>Zitouna</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#">
                                    <h1 className='partner-img1'>Tunisair</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#">
                                    <h1 className='partner-img'>Polina</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="logo mt-30">
                                <a href="#">
                                    <h1 className='partner-img'>ESPRIT</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Link to="chatbot" class="rsc-float-button sc-fjdhpX godhbL">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </Link>


            <Routes>
                <Route path='chatbot' element={
                    <div className='chatbot1'>
                        <Review />
                    </div>

                }></Route>
            </Routes>




        </React.Fragment>


    )
}
