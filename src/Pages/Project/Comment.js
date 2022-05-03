import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Reply from './Reply';
import axiosconfig from '../../axiosConfig'

export default function Comment(props) {

    const [comment, setComment] = useState(props.comment)
    const [idCom, setIdCom] = useState('')
    const [replys, setReplys] = useState('')
    const [rep, setRep] = useState('')
    const [newreply, setNewReply] = useState({})
    const [replyform, setReplyForm] = useState(false)
    const [user, setUser] = useState({})
    const connected = JSON.parse(localStorage.getItem('user'))



    const addForm = (e) => {
        //  e.preventDefault()
        setReplyForm(!replyform)
        setIdCom(comment._id)
        // console.log(comment._id)
    }

    const deleteComment = (e) =>{
        props.deleteComment(comment._id)  
    }

    const deleteRep = (id) => {
        axiosconfig.delete(`/comments/delete/${id}`)
            .then(setRep(!rep))
            .catch(err => {
                console.error(err);
            })
    }
    const handleChange = (e) => {
        e.preventDefault()
        setNewReply({ ...newreply, [e.target.name]: e.target.value })
    }

    const addReply = (e) => {
        e.preventDefault()
        const data = {
            Description: newreply.Description
        }
        axiosconfig.post(`/comments/addReply/${connected.userId}/${idCom}`, data)
            .then(res => {
                setNewReply({})
                setReplyForm(false)
                setRep(!rep)
            })
            .catch(err => {
                console.error(err);
            })
    }

    let date = new Date(comment.DateCreate);
    let CreateDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', day: 'numeric', month: 'long' }).format(date)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axiosconfig.get(`/users/${comment.User}`);
                setUser(response[0]);
            } catch (error) {
                console.error(error)
            }

            try {
                const { data: response } = await axiosconfig.get(`/comments/getReplysByCommentId/${comment._id}`);
                setReplys(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(user, replys);
    }, [rep]);


    return (
        <React.Fragment>
            <li>
                <div className="comment-body">
                    <div className="commentator-img">
                        <img src={`${process.env.REACT_APP_API_URL}/uploads/images/${user.ImageProfile}`} alt="Author" />
                    </div>
                    <div className="comment-content" >
                        <h5 className="commentator">{user.UserName}</h5>
                        <span className="date">{CreateDate}</span>
                        <p className='commentP'>                                                                                                                                                                                                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {comment.Description}                                                                                                                                                                                                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        {connected.userId === user._id && <i class='fas fa-trash-alt' id='deleteIcon' onClick={deleteComment}></i>}
                        <a className="reply-link" value={replyform} onClick={addForm}>
                            Reply<i className="fas fa-arrow-right" />
                        </a>
                    </div>
                </div>
                {replyform &&
                    <div className='replyInput'>
                        <form id='form' onSubmit={addReply}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="input-field mb-30">
                                        <input type='text' id='rep' placeholder="   Reply to this comment" name="Description" value={newreply.Description} onChange={handleChange} ></input>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-field">
                                        <button className="main-btn-rep" >
                                            Send <i className="fas fa-arrow-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                <ul className="children">
                    {replys &&
                        replys.map((reply, index) => (
                            <Reply key={index} reply={reply}  deleteReply={(id) => { deleteRep(id) }}/>
                        ))
                    }
                </ul>
            </li>
        </React.Fragment>
    )
}