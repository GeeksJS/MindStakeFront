import './message.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosconfig from '../../axiosConfig'

export default function Message({ message, own, users }) {
    //console.log(senderImage)

    const Connected = JSON.parse(localStorage.getItem('user'))

    const [friend, setFriend] = useState()
    let id





    //console.log(id)



    useEffect(async () => {

        users.map(user => {
            id = (user.members[0] === Connected.userId ? user.members[1] : user.members[0])
            console.log(id)
        })
        axiosconfig.get(`/users/` + id)
            .then(res => {
                setFriend(res.data[0])
                console.log(res.data[0])
            })
            .catch(err => console.log(err));

    }, []);
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img
                    className='messageImg'
                    src={own ? `https://storage.googleapis.com/mindstake_bucket/${Connected.ImageProfile}`:`https://storage.googleapis.com/mindstake_bucket/${friend && friend.ImageProfile}`}
                    alt=""
                />
                <p className='messageText'>{message?.text}</p>
            </div>
            <div className='messageBottom'>{moment(message?.createdAt).fromNow()}</div>
        </div>
    );
}
