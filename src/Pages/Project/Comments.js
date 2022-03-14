import React from 'react'

export default function Comments() {
    const addComment = (e) => {
        
    }
    return (
        <React.Fragment>
            <div className="project-details-tab">
                <div className="tab-content" id="projectTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="review"
                        role="tabpanel"
                    >
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="comments-template" style={{marginTop: '-50px'}}>
                                    <h4 className="template-title commentP">Peopel Comments</h4>
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-body">
                                                <div className="commentator-img">
                                                    <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Author" />
                                                </div>
                                                <div className="comment-content">
                                                    <h5 className="commentator">John F. Medina</h5>
                                                    <span className="date">25 May 2021</span>
                                                    <p className='commentP'>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                        doloremque laudantium totam rem aperiam
                                                    </p>
                                                    <a href="#" className="reply-link">
                                                        Reply <i className="far fa-long-arrow-right" />
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li>
                                                    <div className="comment-body">
                                                        <div className="commentator-img">
                                                            <img src="https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png" alt="Author" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <h5 className="commentator">Jeffrey T. Kelly</h5>
                                                            <span className="date">25 May 2021</span>
                                                            <p className='commentP'>
                                                                Perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium doloremque laudantium
                                                            </p>
                                                            <a href="#" className="reply-link">
                                                                Reply <i className="far fa-long-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                    <div className="comment-form">
                                        <h4 className="template-title commentP">Leave A Message</h4>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-field mb-20">
                                                        <input type="text" placeholder="Full Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-field mb-20">
                                                        <input type="text" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-field mb-20">
                                                        <input type="text" placeholder="Website URL" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-field mb-30">
                                                        <textarea placeholder="Write Message" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-field">
                                                        <button className="main-btn" onClick={addComment()}>
                                                            Send Comments <i className="fas fa-arrow-right" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="rewards-box mt-md-50">
                                    <h4 className="title">Latest Donations</h4>

                                    <ul>
                                        <li className='liDonations' >
                                            <div className='row'>
                                                <img className='imgD' src='https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png' alt='' />
                                                <div className='col title1 '>
                                                    <p className='donation'>20$</p>
                                                    <h5 className='name' >David Marks
                                                        <span className='span'>&nbsp; - &nbsp; 3 Hours ago</span>
                                                    </h5>

                                                </div>

                                            </div>
                                            <span className='msg'>“God bless you dear”</span>
                                        </li>
                                        <li className='liDonations' >
                                            <div className='row'>
                                                <img className='imgD' src='https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png' alt='' />
                                                <div className='col title1 '>
                                                    <p className='donation'>20$</p>
                                                    <h5 className='name' >David Marks
                                                        <span className='span'>&nbsp; - &nbsp; 3 Hours ago</span>
                                                    </h5>

                                                </div>

                                            </div>
                                            <span className='msg'>“God bless you dear”</span>
                                        </li>
                                        <li className='liDonations' >
                                            <div className='row'>
                                                <img className='imgD' src='https://jancaynap.com/portfolio/bragout/images/profilepics/profile3.imageset/profile-circle.png' alt='' />
                                                <div className='col title1 '>
                                                    <p className='donation'>20$</p>
                                                    <h5 className='name' >David Marks
                                                        <span className='span'>&nbsp; - &nbsp; 3 Hours ago</span>
                                                    </h5>

                                                </div>

                                            </div>
                                            <span className='msg'>“God bless you dear”</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
