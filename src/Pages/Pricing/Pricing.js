import React from 'react'

export default function Pricing() {
    return (
        <React.Fragment>
            <>
                <section className="page-title-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-8">
                                <h1 className="page-title">Pricing</h1>
                            </div>
                            <div className="col-auto">
                                <ul className="page-breadcrumb">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Page Title End ======*/}
                {/*====== Pricing Area Start ======*/}
                <section className="pricing-section section-gap-two primary-soft-bg">
                    <div className="container">
                        <div className="row pricing-boxes justify-content-center">
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0s"
                            >
                                <div className="pricing-box mb-30">
                                    <h6 className="plan-name">Basic Plan</h6>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span>29.67<small className='pricing'>/Year</small></span>
                                    </div>
                                    <span className="plan-subtitle">Suitable For Any IT Solutions</span>
                                    <ul className="plan-feature">
                                        <li>
                                            <i className="fas fa-check" /> Boost your project
                                        </li>
                                        <li className="hidden-feature">
                                            <i className="fas fa-check" /> Unlimited Projects
                                        </li>
                                        <li className="hidden-feature">
                                            <i className="fas fa-check" /> Premium Quality Support
                                        </li>
                                        <li className="hidden-feature">
                                            <i className="fas fa-check" /> Notification Feature
                                        </li>
                                    </ul>
                                    <a href="#" className="pricing-btn">
                                        Select Plan <i className="fas fa-arrow-right" />
                                    </a>
                                    <div className="plan-shape">
                                        <img src="assets/img/pricing-shape.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="pricing-box featured-plan mb-30">
                                    <h6 className="plan-name">popular Plan</h6>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span>35.92<small className='pricing1'>/Year</small></span>
                                    </div>
                                    <span className="plan-subtitle">Suitable For Any IT Solutions</span>
                                    <ul className="plan-feature">
                                        <li>
                                            <i className="fas fa-check" /> Boost your project
                                        </li>
                                        <li>
                                            <i className="fas fa-check" /> Unlimited Projects
                                        </li>
                                        <li>
                                            <i className="fas fa-check" /> Premium Quality Support
                                        </li>
                                        <li className="hidden-feature">
                                            <i className="fas fa-check" /> Notification Feature
                                        </li>
                                    </ul>
                                    <a href="#" className="pricing-btn">
                                        Select Plan <i className="fas fa-arrow-right" />
                                    </a>
                                    <div className="plan-shape">
                                        <img src="assets/img/pricing-shape.png" alt="shape" />
                                    </div>
                                    <span className="plan-tag">Save 45%</span>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="pricing-box mb-30">
                                    <h6 className="plan-name">premium Plan</h6>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span>65.39<small className='pricing'>/Year</small></span>
                                    </div>
                                    <span className="plan-subtitle">Suitable For Any IT Solutions</span>
                                    <ul className="plan-feature">
                                        <li>
                                            <i className="fas fa-check" /> Boost your project
                                        </li>
                                        <li>
                                            <i className="fas fa-check" /> Unlimited Projects
                                        </li>
                                        <li>
                                            <i className="fas fa-check" /> Premium Quality Support
                                        </li>
                                        <li>
                                            <i className="fas fa-check" /> Notification Feature
                                        </li>
                                    </ul>
                                    <a href="#" className="pricing-btn">
                                        Select Plan <i className="fas fa-arrow-right" />
                                    </a>
                                    <div className="plan-shape">
                                        <img src="assets/img/pricing-shape.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Pricing Area End ======*/}
                
            </>

        </React.Fragment>
    )
}
