import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("http://localhost:3000/users/users");
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends);
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/conversations/find/${currentId}/${user._id}`
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
          `http://localhost:3000/conversations`
        ,data);
        const result = await axios.get(
          `http://localhost:3000/conversations/find/${currentId}/${user._id}`
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
              src="https://i.imgur.com/X2JhYjH.png"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.UserName}</span>
        </div>
      ))}
    </div>
  );
}
