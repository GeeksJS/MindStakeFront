import axios from 'axios';
import { useState,useEffect } from 'react'
import './conversations.css'
import axiosconfig from '../../axiosConfig'

export default function Conversation({conversation,currentUser}) {
  const [user,setUser] = useState(null);

  useEffect(() => {
    const friendId= conversation.members.find((m)=>m !== currentUser._id);
    const getUser = async () => {
    await axiosconfig.get("/users/" + friendId)
    .then(res => {
      setUser(res.data[0]);  //res.data is a user
    })
    .catch(err =>console.log(err));
    };
    getUser();  //getUser is a function
  } ,[conversation,currentUser]);

  return (
    <div className='conversation'>
      <img  
        className='conversationImg'
        src={`${process.env.REACT_APP_API_URL}/uploads/images/${user?.ImageProfile}`}
        alt="" />    
      <span className="conversationName"> {user?.UserName+" " +user?.FirstName }</span>
    </div>
  )
}
