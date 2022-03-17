import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Project(props) {
    const [project, setProject] = useState(props.project)

    const date = new Date(project.CreationDate)

    const pourcentqge = project.Raised  / (100*project.Goal) ;

    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-10">
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
                            <img src="assets/img/team/03.jpeg" alt="Thumb" />
                            <a href="#">James W. Barrows</a>
                        </div>
                        <h5 className="title" key={project._id}>
                            <Link to={"/detailProject/"+ project._id}>
                                {project.Title}
                            </Link>
                        </h5>
                        <div className="project-stats">
                            <div className="stats-value">
                                <span className="value-title">
                                    Raised of <span className="value">${project.Raised}</span>
                                </span>
                                <span className="stats-percentage">{pourcentqge}%</span>
                            </div>
                            <div className="stats-bar" data-value={79}>
                                <div className="bar-line" />
                            </div>
                        </div>
                        <span className="date">
                            <i className="far fa-calendar-alt" /> {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: 'numeric'}).format(date)}
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
