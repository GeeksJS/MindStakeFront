import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";
import axiosconfig from '../../axiosConfig'

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axiosconfig.get("/users/users");
      const Investors = res.data.filter((f) => f.Role === "Investor");

            setFriends(Investors);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends);
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/conversations/find/${currentId}/${user._id}`
      );
      if(res.data != null) {
      setCurrentChat(res.data);
      } else {
        const data = {
          senderId: currentId,
          receiverId: user._id
        }
        // data.append("senderId", currentId);
        // data.append("receiverId", user._id);
       const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/conversations`
        ,data);
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/conversations/find/${currentId}/${user._id}`
        );
        setCurrentChat(result.data);
        

      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends && onlineFriends.map((o,index) => (
        <div className="chatOnlineFriend" key={index} onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={`${process.env.REACT_APP_API_URL}/uploads/images/${o.ImageProfile}`}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o.UserName}</span>
        </div>
      ))}
    </div>
  );
}
