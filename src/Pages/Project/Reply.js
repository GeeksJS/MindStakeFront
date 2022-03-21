import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Reply(props) {


    const [reply, setReply] = useState(props.reply)
    const [user, setUser] = useState({})

    let date = new Date(reply.DateCreate);
    let CreateDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', day: 'numeric', month: 'long' }).format(date)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:3000/users/${reply.User}`);
                setUser(response[0]);
                //console.log(user)
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
                        <img src={`http://localhost:3000/uploads/images/${user.ImageProfile}`} alt="Author" />
                    </div>
                    <div className="comment-content">
                        <h5 className="commentator">{user.UserName}</h5>
                        <span className="date">{CreateDate}</span>
                        <p className='commentP'>
                            {reply.Description}                                                                                                                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                    </div>
                </div>
            </li>
        </React.Fragment>
    )
}
