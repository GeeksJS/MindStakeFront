import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'

export default function ActivateAccount() {

    const user = JSON.parse(localStorage.getItem('user'))
    const userActivated = user.isActivated
    const Connected = user

    const activateAccount = (e) => {
        e.preventDefault()
        
        axios.post(`http://localhost:3000/users/activate-account/${user.userId}`)
            .then(res => {
                console.log(res.data)
                // localStorage.removeItem('ResetPasswordUserId')
                // localStorage.removeItem('ResetPasswordToken')
                Connected.isActivated = true;
                localStorage.removeItem('user')
                localStorage.setItem('user', JSON.stringify(Connected))
                Swal.fire(
                    'Done!',
                    'Account activated successfully!',
                    'success'
                ).then(window.location = "/")
                

            })
            .catch(err => {
            })
    }


  return (
    <React.Fragment>
        <div id="loginform" >
                <img src='assets/img/logo.png' alt="logo" className='logo' />
                <div id="loginformcontainer">
                    <form onSubmit={activateAccount}>
                        <h3 style={{ textAlign: "center" }}>Welcome to MindStake</h3>
                        <br />
                        <br />
                        <div className='rowLogin'>
                            <label>Please click on the link below to activate your account</label>
                           
                            <br />

                        </div>
                       
                        <a href='/' style={{ width: '100%' }}>
                            <div id='button' className='rowLogin'>
                                <button >Activate account</button>
                            </div>
                        </a>
                        <br />
                        <br />

                    </form>

                </div>

            </div>
    </React.Fragment>
  )
}
