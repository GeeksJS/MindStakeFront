import React, { Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Review from '../Chatbot/Review'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'
import ScrollToTop from "react-scroll-to-top";
import { Trans, useTranslation } from 'react-i18next';



export default function Home() {
    const { t, i18n } = useTranslation();

    const User = JSON.parse(localStorage.getItem('user'))

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
                                    Explore Projects <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-shapes">
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
            <section className="counter-section-one mt-negative" style={{ marginTop: '100px ' }}>
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
                                        <a>Education</a>
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
                                        <a>Medical &amp; Health</a>
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
                                        <a>Clothes</a>
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
                                        <a>Video &amp; Films</a>
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
                                        <a>Technology</a>
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
                                        <a>Organic Foods</a>
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
                                    <Link to='/createproject' className="main-btn">
                                        Add Project <i className="fas fa-arrow-right" />
                                    </Link>
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
                                    <Link to='/pricing' className="main-btn">
                                        Buy Pack<i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emergency-project-slider">

                </div>
            </section>
            <section className="partners-section section-gap section-border-bottom justify-content-center" style={{ marginTop: '-200px' }}>
                <div className="container">
                    <div className="about-text mt-md-70 mb-md-50">
                        <div className="common-heading mb-30" style={{ textAlign: 'left' }}>
                            <span className="tagline" >
                                <i className="fas fa-plus" style={{ marginLeft: '8%' }} /> Our Partners
                                <span className="heading-shadow-text">Partners</span>
                            </span>
                            <h2 className="title" >Trusted Partners</h2>
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
            <div className='row'>
                <Link to="chatbot" class="rsc-float-button sc-fjdhpX godhbL" >
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </Link>
            </div>


            <Routes>
                <Route path='chatbot' element={
                    <div className='chatbot1'>
                        <Review />
                    </div>

                }></Route>
            </Routes>





            <div class="toast notice" role="alert" >
                <div class="toast-body">
                    <p>fdfdfdfdfddfdfdf</p>
                    fdgdfgfdg
                    fgddfgfgd
                    fgdfgd

                </div>
            </div>


        </React.Fragment>


    )
}
