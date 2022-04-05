import axios from 'axios';
import { useState,useEffect } from 'react'
import './conversations.css'

export default function Conversation({conversation,currentUser}) {
  const [user,setUser] = useState(null);

  useEffect(() => {
    const friendId= conversation.members.find((m)=>m !== currentUser._id);
    const getUser = async () => {
    await axios.get("http://localhost:3000/users/" + friendId)
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
        src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
        alt="" />    
      <span className="conversationName"> {user?.UserName}</span>
    </div>
  )
}
