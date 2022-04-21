import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Project(props) {

    const Connected = JSON.parse(localStorage.getItem('user'))
    const [project, setProject] = useState(props.project)
    const [user, setUser] = useState({})
    const date = new Date(project.CreationDate)
    console.log("project", project)
    const pourcentage = project.Raised / (100 * project.Goal);

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${project.User}`)
            .then(res => {
                setUser(res.data[0]);
            })
    }, []);
  
    const deleteBookmark = (e) => {
        props.deleteBookmark(project._id, Connected.userId)
    }

    return (
        <React.Fragment>
            <div id="myProject" className="col-lg-4 col-md-6 col-sm-10">
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
                        {window.location.pathname === "/bookmarks" &&
                            <i class='fas fa-trash-alt' id='deleteIcon' style={{ marginLeft: '40px' }} onClick={deleteBookmark}></i>
                        }
                        <div className="author">
                            <img src={`http://localhost:3000/uploads/images/${user.ImageProfile}`} alt="Thumb" />
                            <a href="#">{user.UserName}</a>
                        </div>
                        <h5 id="myTitle" className="title">
                            <Link to={"/detailProject/" + project._id}>
                                {project.Title}
                            </Link>
                        </h5>
                        <div className="project-stats">
                            <div className="stats-value">
                                <span className="value-title">
                                    Raised of <span className="value">${project.Raised}</span>
                                </span>
                                <span className="stats-percentage">{pourcentage}%</span>
                            </div>
                            <div className="stats-bar" data-value={79}>
                                <div className="bar-line" />
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
