import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import Project from './Project'
import Review from '../Chatbot/Review'
import axios from 'axios'

export default function Projects() {


    const [projects, setProjects] = useState('');
    const [visible, setVisible] = useState(2);
    const [searchTerm, setsearchTerm] = useState('')
    const [change, setChange] = useState(false);
    const showMoreProjects = () => {
        setVisible(prevValue => prevValue + 1);
    }
    const keys = ["Category", "Title"];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:3000/projects/getallprojects`);
                setProjects(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(projects);

    }, []);
    const search = (e) => {
        setsearchTerm(e.target.value)
    }

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
                                <li>Projects</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <section className="project-section section-gap-extra-bottom primary-soft-bg">
               

                <div className="container">
                  
                    <div class="d-flex justify-content-end h-100">
                        <div class="searchbar">
                            <input class="search_input" type="text" name="" placeholder="Search..."  onChange={search} />
                                <a  class="search_icon"><i class="fas fa-search" style={{color:"#14b761"}}></i></a>
                        </div>
                    </div>
                    <br></br>
                    <div className="row project-items justify-content-center project-style-one">

                        {projects &&
                            projects.filter(((project) => {
                                if (keys.some((key) => project[key].toLowerCase().includes(searchTerm.toLowerCase()))) {
                                    console.log(project)
                                    console.log(searchTerm)
                                    return project
                                }
                            })).slice(0, visible).map((project, index) => (
                                console.log("hetha li bech yetb3ath", project),
                                <Project key={project._id} project={project} />

                            ))
                        }

                        <div className="col-12">
                            <div className="view-more-btn text-center mt-40">
                                <a className="main-btn bordered-btn" onClick={showMoreProjects}>
                                    View More Project <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </React.Fragment>
    )
}