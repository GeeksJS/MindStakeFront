import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosconfig from '../../axiosConfig'

export default function Project(props) {

    const Connected = JSON.parse(localStorage.getItem('user'))
    const [project, setProject] = useState(props.project)
    const [user, setUser] = useState({})
    const date = new Date(project.CreationDate)
    const pourcentage = (project.Raised * 100) / project.Goal;

    useEffect(() => {
        axiosconfig.get(`/users/${project.User}`)
            .then(res => {
                setUser(res.data[0]);
            })
    }, []);

    const deleteBookmark = (e) => {
        props.deleteBookmark(project._id, Connected.userId)
    }

    return (
        <React.Fragment>
            <div id="myProject" className="col-lg-4 col-md-6 col-sm-10" >
                <div className="project-item mb-30">
                    <div
                        className="thumb"
                        style={{
                            backgroundImage: `url(https://storage.googleapis.com/mindstake_bucket/${project.Picture})`
                        }}
                    />
                    <div className="content">
                        <div className="cats">
                            <a href="#">{project.Category}</a>

                        </div>
                        {window.location.pathname === "/bookmarks" &&
                            <i class='fas fa-trash-alt' id='deleteIcon' style={{ marginLeft: '40px' }} onClick={deleteBookmark}></i>
                        }
                        <div className="author">
                            <img src={`https://storage.googleapis.com/mindstake_bucket/${user.ImageProfile}`} alt="Thumb" />
                            <a href="#">{user.UserName}</a>
                        </div>
                        {Connected ? <h5 id="myTitle" className="title">
                            <Link to={"/detailProject/" + project._id}>
                                {project.Title}
                            </Link>
                        </h5> : <h5 id="myTitle" className="title">

                            {project.Title}

                        </h5>}

                        <div className="project-stats">
                            <div className="stats-value">
                                <span className="value-title">
                                    Raised of <span className="value">${project.Raised}</span>
                                </span>
                                <span className="stats-percentage">{pourcentage.toFixed(2)}%</span>
                            </div>
                            <div className="stats-bar" data-value={79}>
                                <div className="bar-line" style={{ width: `${pourcentage}%` }} />
                            </div>
                        </div>
                        <span className="date">
                            <i className="far fa-calendar-alt" /> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)}
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
