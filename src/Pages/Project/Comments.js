import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Comment from './Comment';

export default function Comments(props) {

    const [comments, setComment] = useState('')
    const [newcomment, setNewComment] = useState({})
    const User = JSON.parse(localStorage.getItem('user'))


    const addComment = (e) => {
        e.preventDefault()
        const data = {
            Description: newcomment.Description
        }
        axios.post(`http://localhost:3000/comments/addComment/${User.userId}/${props.idProject}` , data)
            .then(res => {
               document.getElementById('com').value = ''
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleChange = (e) => {
        e.preventDefault()
        setNewComment({ ...newcomment, [e.target.name]: e.target.value })
        console.log(newcomment)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:3000/comments/getAllComments/${props.idProject}`);
                setComment(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(comments);

    }, [comments]);
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
                                <div className="comments-template" style={{ marginTop: '-50px' }}>
                                    <h4 className="template-title commentP">Peopel Comments</h4>
                                    <ul className="comments-list">
                                        {comments &&
                                            comments.map((comment, index) => (
                                                <Comment key={index} comment={comment} />
                                            ))
                                        }
                                    </ul>
                                    <div className="comment-form">
                                        <h4 className="template-title commentP">Leave A Comment</h4>
                                        <form onSubmit={addComment}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="input-field mb-30">
                                                        <textarea placeholder="Write your comment" id='com' name="Description" value={newcomment.Description} onChange={handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-field">
                                                        <button className="main-btn" >
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
