import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DonnationCard(propos) {

const idUser = propos.don.Sender
const [user, setUser] = useState();
console.log(idUser)
useEffect(async () => {
       await axios.get(`http://localhost:3000/users/${idUser}`)
            .then((res) => {
                setUser(res.data[0])
                
                   console.log(user)
            })
}
, [])
  return (
    <li className='liDonations' >
    <div className='row'>
       {user && <img className='imgD'src={`http://localhost:3000/uploads/images/${user.ImageProfile}`} alt='' />}
        <div className='col title1 '>
            <p className='donation'>{propos.don.amount} <small>Gc</small></p>
            {user && <h5 className='name' >{user.UserName}
                <span className='span'>&nbsp; - &nbsp;&nbsp;&nbsp;{propos.don.created}</span>
            </h5>}

        </div>
    </div>
    <span className='msg'>“God bless you dear”</span>
</li>
  )
}
