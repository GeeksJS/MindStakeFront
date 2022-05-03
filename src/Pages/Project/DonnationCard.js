import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axiosconfig from '../../axiosConfig'

export default function DonnationCard(propos) {

  const idUser = propos.don.Sender
  const [user, setUser] = useState();
  console.log(idUser)
  useEffect(async () => {
    await axiosconfig.get(`/users/${idUser}`)
      .then((res) => {
        setUser(res.data[0])

        console.log(user)
      })
  }
    , [])
  return (
    <li className='liDonations' >
      <div className='row'>
        {user && <img className='imgD rounded-circle' src={`${process.env.REACT_APP_API_URL}/uploads/images/${user.ImageProfile}`} alt='' />}
        <div className='col title1 '>
          
            <div className='row'>
            &nbsp;&nbsp;&nbsp;
              <p className='donation'>{propos.don.amount} <small>Gc</small></p>

              <span className='span'>&nbsp; - &nbsp;&nbsp;&nbsp;{propos.don.created}</span>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {user && <h5 className='name' >{user.UserName}
          </h5>}

        </div>
      </div>
    </li>
  )
}
