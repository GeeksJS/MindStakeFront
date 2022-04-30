import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Pricing() {
    const navigate = useNavigate()
    const [packs, setPacks] = useState()
    useEffect(async () => {
        await axios.get(`http://localhost:3000/packs/`)
            .then((res) => {
                setPacks(res.data)

                console.log(packs)
            })
    }
        , [])
    const handleChooseProject = (pack) => {
        navigate(`/chooseProject/${pack}`)
    }
  
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
                                        <Link to='/'>Home</Link>

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
                            {packs &&
                                packs.map((pack, index) => (

                                    <div
                                        className="col-lg-4 col-md-6 col-sm-10 "
                                        data-wow-delay="0s" style={{ paddingTop: "50px" }}
                                    >
                                        <div className="pricing-box mb-30" style={{ height: "100%" }}>
                                            <h6 className="plan-name">{pack.Title}</h6>
                                            <div className="price">
                                                <span className="currency">$</span>
                                                <span>{pack.Price}<small className='pricing'>/{pack.Duration}</small></span>
                                            </div>
                                            <span className="plan-subtitle">{pack.Description}</span>
                                            <ul className="plan-feature"  >
                                                {pack.Features && pack.Features.map((feature, index1) => (
                                                    <li >
                                                        <i className="fas fa-check" /> {feature}
                                                    </li>

                                                ))
                                                }
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
                                            <a className=" pricing-btn" onClick={()=> handleChooseProject(pack._id)}>
                                                Select Plan <i className="fas fa-arrow-right" />
                                            </a>
                                            <div className="plan-shape">
                                                <img src="assets/img/pricing-shape.png" alt="shape" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                    
                                ))}

                        </div>
                    </div>
                </section>
                {/*====== Pricing Area End ======*/}

            </>

        </React.Fragment>
    )
}
