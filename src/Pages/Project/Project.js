import React from 'react'
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item mb-30">
                    <div
                        className="thumb"
                        style={{
                            backgroundImage: "url(assets/img/project/project-grid1.jpeg)"
                        }}
                    />
                    <div className="content">
                        <div className="cats">
                            <a href="#">Video &amp; Movies</a>
                        </div>
                        <div className="author">
                            <img src="assets/img/team/03.jpeg" alt="Thumb" />
                            <a href="#">James W. Barrows</a>
                        </div>
                        <h5 className="title">
                            <Link to="/detailProject">
                                Best Romantic &amp; Action English Movie Release in 2022.
                            </Link>
                        </h5>
                        <div className="project-stats">
                            <div className="stats-value">
                                <span className="value-title">
                                    Raised of <span className="value">$59,689</span>
                                </span>
                                <span className="stats-percentage">79%</span>
                            </div>
                            <div className="stats-bar" data-value={79}>
                                <div className="bar-line" />
                            </div>
                        </div>
                        <span className="date">
                            <i className="far fa-calendar-alt" /> 25 February 2021
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
