import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Description() {
    let { id } = useParams();
    const [project, setProject] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:3000/projects/getproject/${id}`)
            .then(res => {
                setProject(res.data[0])
            })
            .catch(err => {
                console.error(err);
            })

    }, []);
    if (project.Video) {
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
                                        {project.Title}
                                    </h4>
                                    <p>
                                        {project.Description}
                                    </p>
                                    <br />

                                    {project.Video !== "video.mp4" ?
                                        <video controls width="700" >
                                            <source src={`http://localhost:3000/uploads/video/${project.Video}`}
                                                type="video/mp4"></source>
                                            salem</video> :
                                        <img controls width="700" height='500px'
                                            src={`http://localhost:3000/uploads/images/${project.Picture}`}
                                            alt="Image"
                                        />
                                    }



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
                                <br />
                                <div className="rewards-box mt-md-50">
                                    <h4 className="title">Project location</h4>

                                    <div className="contact-maps" style={{ height: '500px' }}>
                                        <iframe loading="lazy" allowfullscreen src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAdU7HD7d8B2G91q8eTEVRq42jvGyPE2n0&q=${project.Location}`}></iframe>
                                    </div>

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
    } else {
        return (<div>&nbsp;</div>)
    }
}
