import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Comments from './Comments'
import Description from './Description'

export default function ProjectDetails() {
    return (
        <React.Fragment>



            <section className="page-title-area">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">Project Details</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>Project Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-details-area section-gap-extra-bottom">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="project-thumb mb-md-50">
                                <img src="https://funden.vercel.app/assets/img/project/project-details.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-summery ">
                                <a href="#" className="category ">
                                    Headphone
                                </a>
                                <h3 className="project-title">
                                    Kodak PIXPRO Friendly Zoom FZ53-RD 1605MP Digital Camera
                                </h3>
                                <div className="meta">
                                    <div className="author">
                                        <img src="assets/img/team/03.jpeg" alt="Thumb" />
                                        <a href="#">James W. Barrows</a>
                                    </div>
                                    <a href="#" className="date">
                                        <i className="far fa-calendar-alt" />
                                        25 Feb 2021
                                    </a>
                                </div>
                                <div className="project-funding-info">
                                    <div className="info-box">
                                        <span>$5036k</span>
                                        <span className="info-title">Pledged</span>
                                    </div>
                                    <div className="info-box">
                                        <span>9</span>
                                        <span className="info-title">Backers</span>
                                    </div>
                                    <div className="info-box">
                                        <span>29</span>
                                        <span className="info-title">Days Left</span>
                                    </div>
                                </div>
                                <div className="project-raised clearfix">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="raised-label">Raised of $59,689</div>
                                        <div className="percent-raised">79%</div>
                                    </div>
                                    <div className="stats-bar" data-value={79}>
                                        <div className="bar-line" />
                                    </div>
                                </div>
                                <div className="project-form">
                                    <form action="#">
                                        <ul className="donation-amount">
                                            <li>$5</li>
                                            <li>$50</li>
                                            <li>$180</li>
                                            <li>$500</li>
                                            <li>$1000</li>
                                        </ul>
                                        <button type="submit" className="main-btn">
                                            Donate Now <i className="far fa-arrow-right" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <ul class="nav nav-tabs tabs" >
                                <li class="nav-item"><Link className={window.location.pathname === "/detailProject" ? "nav-link ps-0 active" : "nav-link px-2 px-md-3"} id="description-tab" data-bs-toggle="tab" to="" role="tab" aria-selected="true">Description</Link></li>
                                <li class="nav-item"><Link className={window.location.pathname === "/detailProject/comment" ? "nav-link ps-0 active" : "nav-link px-2 px-md-3"} id="reviews-tab" data-bs-toggle="tab" to="comment" role="tab" aria-selected="false">Reviews</Link></li>
                            </ul>

                            <Routes>
                                <Route path='' element={<Description />}></Route>
                                <Route path='comment' element={
                                    <div className='container'>
                                        <Comments />
                                    </div>}></Route>
                            </Routes>

                        </div>
                    </div>
                </div>
            </section>



        </React.Fragment>
    )
}
