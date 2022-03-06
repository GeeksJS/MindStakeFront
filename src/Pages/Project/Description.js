import React from 'react'

export default function Description() {
    return (
        <div className="project-details-tab">
            <div className="tab-content" id="projectTabContent">
                <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                >
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="description-content">
                                <h4 className="description-title">
                                    Best Smart Headphone In 2021
                                </h4>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                    enim ipsam voluptatem quia voluptas sit aspernatur aut
                                    odit aut fugit, sed quia consequuntur magni dolores eos
                                    qui ratione voluptatem sequi nesciunt. Neque porro
                                    quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam eius
                                    modi tempora incidunt ut labore et dolore magnam aliquam
                                    quaerat voluptatem. Ut enim ad minima veniam, quis
                                    nostrum exercitationem ullam corp oris suscipit
                                    laboriosam, nisi ut aliquid ex ea commodi consequatur.
                                    Quis autem vel eum iure reprehenderit qui in ea
                                    voluptate velit esse quam nihil molestiae consequatur
                                    vel illume.
                                </p>
                                <img
                                    className="mt-50 mb-50"
                                    src="https://funden.vercel.app/assets/img/project/project-details-2.jpg"
                                    alt="Image"
                                />
                                <h4 className="description-title">
                                    Why Donate Our Products
                                </h4>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                    aut odit aut fugit, sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi nesciunt. Neque porro
                                    quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam eius
                                    modi temporadunt ut labore et dolore magnam aliquam
                                    quaerat voluptate enim ad minima veniam suscipit
                                </p>
                                <ul className="description-list">
                                    <li>Standard Lorem Sum Passage Used</li>
                                    <li>Build A Music Manager With Nuxt</li>
                                    <li>A Foldable Web Actually Mean</li>
                                    <li>Upcoming Web Design Conferences</li>
                                </ul>
                                <p>
                                    But I must explain to you how all this mistaken idea of
                                    denouncing pleasure and praising pain was born and I
                                    will give you a complete account of the system, and
                                    expound the actual teachings of the great explorer of
                                    the truth, the master-builder of human happiness. No one
                                    rejects, dislikes,
                                </p>
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
                <div className="tab-pane fade" id="update" role="tabpanel">
                    Update
                </div>
                <div className="tab-pane fade" id="bascker-list" role="tabpanel">
                    Bascker List
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel">
                    Reviews
                </div>
            </div>
        </div>
    )
}
