import ChatOnline from "../ChatOnline/ChatOnline";
import Conversation from "../Conversations/Conversation";
import Message from "../Message/Message";
import "./messenger.css";
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from "axios";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import axiosconfig from '../../axiosConfig'

export default function Messenger() {
  const { user } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessage] = useState(" ");
  const scrollRef = useRef();
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);



  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user.userId);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings?.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);


  // useEffect(()=>{
  //   await axios.get("http://localhost:3000/users/" + friendId)
  //   .then(res => {
  //     setUser(res.data[0]);  //res.data is a user
  //   })
  //   .catch(err =>console.log(err));
  //   },[])

  useEffect(() => {
    const getConversations = async () => {

      await axios.get(`${process.env.REACT_APP_API_URL}/conversations/` + user.userId)
        .then(res => {
          //console.log(res.data)

          setConversations(res.data);  //res.data is an array of conversations
        })
        .catch(err => console.log(err));
    };
    getConversations();
  }, [user.userId]);

  useEffect(() => {
    const getMessage = async () => {

      await axios.get(`${process.env.REACT_APP_API_URL}/messages/` + currentChat?._id)
        .then(res => {
          setMessages(res.data);  //res.data is an array of messages
        })
        .catch(err => console.log(err));
    };
    getMessage();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.userId,
      text: newMessage,
      conversationId: currentChat?._id
    };
    const receiverId = currentChat.members.find(
      (member) => member !== user.userId
    );

    socket.current.emit("sendMessage", {
      senderId: user.userId,
      receiverId,
      text: newMessage,
    });

    await axios.post(`${process.env.REACT_APP_API_URL}/messages/`, message)
      .then(res => {
        setMessages([...messages, res.data]);
        setNewMessage("");
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
 

  return (
    <div className="container">
      <div className='messenger'>
        <div className='chatMenu' style={{backgroundColor:'#edf9f3',borderRadius:'5%'}}>
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" style={{backgroundColor:'#edf9f3'}}/>
            {conversations.map((conversation, index) => {
              //console.log(conversation);
              return (<div onClick={() => setCurrentChat(conversation)}>
                <Conversation conversation={conversation} key={index} currentUser={user} />
              </div>
              )
            })}
          </div>
        </div>
        <div className='chatBox'>
          <div className="chatBoxWrapper">
            {
              currentChat ?
                <>
                  <div className="chatBoxTop" >

                    <Link to={'/join/' + currentChat._id} style={{ display: "flex", justifyContent: "end" }} data-bs-toggle="tooltip" data-bs-placement="top" title="Join video chat">
                      <span className="icon1">
                        <i className="fas fa-video"></i>
                      </span>
                    </Link>
                    {
                      messages.map((message, index) => (
                        <div ref={scrollRef}>
                          <Message
                            message={message}
                            key={index}
                            own={message.sender === user.userId} />
                        </div>
                      ))
                    }
                  </div>

                  <div className="chatBoxBottom">

                    <textarea
                      className="chatMessageInput"
                      placeholder="Write your message here..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    >
                    </textarea>
                    <button className="chatSubmitButton" onClick={handleSubmit}>send</button>
                  </div>
                </>
                : <span className="noConversationText"> Open a conversation to start a chat</span>}
          </div>
        </div>
        {/* <div className='chatOnline'>
        <div className="chatOnlineWrapper">
          <ChatOnline
            onlineUsers={onlineUsers}
            currentId={user.userId}
            setCurrentChat={setCurrentChat}
          />

        </div>
      </div> */}
      </div>
    </div>
  )
}