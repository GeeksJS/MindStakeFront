import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import Project from './Project'
import Review from '../Chatbot/Review'

export default function Projects() {
    return (
        <React.Fragment>


            <section className="page-title-area">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">Latest Project</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>Project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-section section-gap-extra-bottom primary-soft-bg">
                <div className="container">
                    <div className="row project-items justify-content-center project-style-one">
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <Project />

                        <div className="col-12">
                            <div className="view-more-btn text-center mt-40">
                                <a href="project-details.html" className="main-btn bordered-btn">
                                    View More Project <i className="far fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  


        </React.Fragment>
    )
}
