import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axiosconfig from '../../axiosConfig'

export default function Reply(props) {

    const connected = JSON.parse(localStorage.getItem('user'))

    const [reply, setReply] = useState(props.reply)
    const [user, setUser] = useState({})

    let date = new Date(reply.DateCreate);
    let CreateDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', day: 'numeric', month: 'long' }).format(date)

    const deleteReply = (e) => {
        props.deleteReply(reply._id)
        // axios.delete(`http://localhost:3000/comments/delete/${reply._id}`)
        //     .then()
        //     .catch(err => {
        //         console.error(err);
        //     })
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axiosconfig.get(`/users/${reply.User}`);
                setUser(response[0]);
               
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(user);
    }, []);


    return (
        <React.Fragment>
            <li>
                <div className="comment-body">
                    <div className="commentator-img">
                        <img src={`https://storage.googleapis.com/mindstake_bucket/${user.ImageProfile}`} alt="Author" />
                    </div>
                    <div className="comment-content">
                        <h5 className="commentator">{user.UserName}</h5>
                        <span className="date">{CreateDate}</span>
                        <p className='commentP'>
                            {reply.Description}                                                                                                                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        {connected.userId === user._id &&  <i class='fas fa-trash-alt' id='deleteIcon1' onClick={deleteReply}></i>}
                    </div>
                </div>
            </li>
        </React.Fragment>
    )
}
