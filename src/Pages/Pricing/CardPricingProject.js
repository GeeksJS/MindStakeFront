import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CardPricingProject() {
    const [Myprojects, setMyprojects] = useState('')
    let {idPack} = useParams()
    const User = JSON.parse(localStorage.getItem('user'))
   
    const [user, setUser] = useState({})
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:3000/projects/getProjectByUser/${User.userId}`);
                setMyprojects(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(Myprojects);
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${User.userId}`)
            .then(res => {
                setUser(res.data[0]);
            })
    }, []);
    return (
        <React.Fragment>
            <>
                <section className="page-title-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-8">
                                <h1 className="page-title">Choose a project</h1>
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
                    <div className="row project-items justify-content-center project-style-one">
                            {Myprojects &&
                                Myprojects.map((project, index) => (
                                    <div id="myProject" className="col-lg-4 col-md-6 col-sm-10" >
                                    <div className="project-item mb-30">
                                        <div
                                            className="thumb"
                                            style={{
                                                backgroundImage: `url(http://localhost:3000/uploads/images/${project.Picture})`
                                            }}
                                        />
                                        <div className="content">
                                            <div className="cats">
                                                <a href="#">{project.Category}</a>
                    
                                            </div>
                                           
                                            <div className="author">
                                                <img src={`http://localhost:3000/uploads/images/${user.ImageProfile}`} alt="Thumb" />
                                                <a href="#">{user.UserName}</a>
                                            </div>
                                            <h5 id="myTitle" className="title">
                                              
                                                    {project.Title}
                                                
                                            </h5>
                                            <div className="project-stats">
                                                <div className="stats-value">
                                                    <span className="value-title">
                                                        Raised of <span className="value">${project.Raised}</span>
                                                    </span>
                                                </div>
                                                
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                ))}

                        </div>
                    </div>
                </section>
            </>

        </React.Fragment>
    )
}
