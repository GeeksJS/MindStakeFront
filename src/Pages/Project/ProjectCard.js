import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard(props) {
    console.log(props)
    const [project, setProject] = useState(props.project)
    const date = new Date(project.CreationDate)

    const pourcentage = project.Raised / (100 * project.Goal);

    return (
        <React.Fragment>
            <div className="card info-card cp ">
                <div className="card-body">
                    <div
                        className="thumb"
                        style={{
                            backgroundImage: `url(${process.env.REACT_APP_API_URL}/uploads/images/${project.Picture})`
                        }}
                    />
                    <div className="content">
                        <div className="cats">
                            <a href="#">{project.Category}</a>
                        </div>


                        <h5 className="title">
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
