import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import axiosconfig from '../../axiosConfig'
import { useParams } from 'react-router-dom';
import DonnationCard from './DonnationCard';

export default function Comments(props) {

    const [comments, setComment] = useState('')
    const [cmnt, setCmnt] = useState(false)
    const [newcomment, setNewComment] = useState({})
    const User = JSON.parse(localStorage.getItem('user'))

    let { id } = useParams();
    const [latestDon, setLatestDon] = useState();
    const addComment = (e) => {
        e.preventDefault()
        const data = {
            Description: newcomment.Description
        }
        axiosconfig.post(`/comments/addComment/${User.userId}/${props.idProject}`, data)
            .then(res => {

                setCmnt(!cmnt)
            })
            .catch(err => {
                console.error(err);
            })
        document.getElementById('com').value = ''
    }

    const deleteCom = (id) => {
        axiosconfig.delete(`/comments/delete/${id}`)
            .then(setCmnt(!cmnt))
            .catch(err => {
                console.error(err);
            })
    }

    const handleChange = (e) => {
        e.preventDefault()
        setNewComment({ ...newcomment, [e.target.name]: e.target.value })
        //  console.log(newcomment)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axiosconfig.get(`/comments/getAllComments/${props.idProject}`);
                setComment(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(comments);

    }, [cmnt]);
    useEffect(async () => {
        await axiosconfig.get(`/payment/donations-byProject/${id}`).then((res) => {
            setLatestDon(res.data)
       
    })}, [])
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
                                    {comments && <h4 className="template-title commentP">Peopel Comments</h4>}
                                    <ul className="comments-list">
                                        {comments &&
                                            comments.map((comment, index) => (
                                                <Comment key={index} comment={comment} deleteComment={(id) => { deleteCom(id) }} />
                                            ))
                                        }
                                    </ul>
                                    <div className="comment-form">
                                        <h4 className="template-title commentP">Leave A Comment</h4>
                                        <form onSubmit={addComment}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="input-field mb-30">
                                                        <textarea placeholder="Write your comment" id='com' name="Description" onChange={handleChange} />
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
                                        {latestDon && latestDon.map((value, index) =>
                                       
                                           <DonnationCard don={value} key={value._id}/>
                                        )
                                        
                                        }



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
