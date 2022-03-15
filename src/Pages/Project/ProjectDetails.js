import React, { useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Comments from './Comments'
import Description from './Description'

export default function ProjectDetails() {

    const [dollar5,setDollar5]=useState(false)
    const [dollar10,setDollar10]=useState(false)
    const [dollar20,setDollar20]=useState(false)
    const [dollar50,setDollar50]=useState(false)
    const [dollar100,setDollar100]=useState(false)

    const navigate = useNavigate();



    const click5 = () => {
        setDollar5(true) 
        setDollar10(false)
        setDollar20(false)
        setDollar50(false)
        setDollar100(false)
        
    }
    const click10 = () => {
        setDollar5(false) 
        setDollar10(true)
        setDollar20(false)
        setDollar50(false)
        setDollar100(false)
        

    }
    const click20 = () => {
        setDollar5(false) 
        setDollar10(false)
        setDollar20(true)
        setDollar50(false)
        setDollar100(false)
        

    }
    const click50 = () => {
        setDollar5(false) 
        setDollar10(false)
        setDollar20(false)
        setDollar50(true)
        setDollar100(false)
        

    }
    const click100 = () => {
        setDollar5(false) 
        setDollar10(false)
        setDollar20(false)
        setDollar50(false)
        setDollar100(true)
    
    }
    


    const donate = () =>{
        //navigate('https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op' ,{replace:true})
       // window.location.replace('https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op')
       <Link to={{pathname:'https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op'}}></Link>
    }

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
                                    <Link to='/'>Home</Link>
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
                                            <li className={dollar5 && 'dollar-5'} onClick={click5}>$5</li>
                                            <li className={dollar10 && 'dollar-5'} onClick={click10}> $10</li>
                                            <li className={dollar20 && 'dollar-5'} onClick={click20}>$20</li>
                                            <li className={dollar50 && 'dollar-5'} onClick={click50}>$50</li>
                                            <li className={dollar100 && 'dollar-5'} onClick={click100}>$100</li>
                                        </ul>
                                        <a type="submit" className="main-btn" href='https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op'>
                                            Donate Now <i className="fas fa-arrow-right" />
                                        </a>
                                        <button type="submit" className="main-btn" style={{ backgroundColor: 'rgba(255, 180, 40)', marginLeft: '30px' }}>
                                            Contact <i class="fab fa-facebook-messenger"></i>
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