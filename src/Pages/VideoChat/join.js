import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function JoinRoom() {
  const [room, setRoom] = useState(null);
  let{id} = useParams();
  const navigate = useNavigate();
useEffect(()=>{
  navigate(`/video/${id}`);
},[])
  return (
    <div>
     
    </div>
  );
}
