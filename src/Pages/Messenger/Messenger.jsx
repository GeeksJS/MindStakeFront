import ChatOnline from "../ChatOnline/ChatOnline";
import Conversation from "../Conversations/Conversation";
import Message from "../Message/Message";
import "./messenger.css";
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
  const { user } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessage] = useState(" ");
  const scrollRef = useRef();
  const socket = useRef();
  const [arrivalMessage,setArrivalMessage]=useState(null);
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




  useEffect(() => {
    const getConversations = async () => {
      await axios.get("http://localhost:3000/conversations/" + user.userId)
        .then(res => {
          setConversations(res.data);  //res.data is an array of conversations
        })
        .catch(err => console.log(err));
    };
    getConversations();
  }, [user.userId]);

  useEffect(() => {
    const getMessage = async () => {

      await axios.get("http://localhost:3000/messages/" + currentChat?._id)
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
    
    await axios.post("http://localhost:3000/messages/", message)
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
    <div className='messenger'>
      <div className='chatMenu'>
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversations.map((conversation, index) => (
            <div onClick={() => setCurrentChat(conversation)}>
              <Conversation conversation={conversation} key={index} currentUser={user} />
            </div>
          ))}
        </div>
      </div>
      <div className='chatBox'>
        <div className="chatBoxWrapper">
          {
            currentChat ?
              <>
                <div className="chatBoxTop" >
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
      <div className='chatOnline'>
        <div className="chatOnlineWrapper">
        <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user.userId}
              setCurrentChat={setCurrentChat}
            />

        </div>
      </div>
    </div>
  )
}