import axios from 'axios';
import { useState, useEffect } from 'react'
import './conversations.css'
import axiosconfig from '../../axiosConfig'

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const Connected = JSON.parse(localStorage.getItem('user'))


  useEffect(() => {
    //const friendId = conversation.members.find((m) => m !== currentUser._id);
    //let friendId
    let id =conversation.members[0]===Connected.userId ?  conversation.members[1] :  conversation.members[0]
    console.log(Connected.userId)
    const getUser = async () => {
      await axiosconfig.get("/users/" + id)
        .then(res => {
          setUser(res.data[0]);  //res.data is a user
        })
        .catch(err => console.log(err));
    };
    getUser();  //getUser is a function
  }, [conversation, currentUser]);

  return (
    <div className='conversation'>
      <img
        className='conversationImg'
        src={`https://storage.googleapis.com/mindstake_bucket/${user?.ImageProfile}`}
        alt="" />
      <span className="conversationName"> {user?.LastName + " " + user?.FirstName}</span>
    </div>
  )
}
