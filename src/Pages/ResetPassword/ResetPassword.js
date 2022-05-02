import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function ResetPassword() {

    const [Pwd, setPwd] = useState({})

    var userId = JSON.parse(localStorage.getItem('ResetPasswordUserId'))
    var token = JSON.parse(localStorage.getItem('ResetPasswordToken'))


    const resetPassword = (e) => {
        e.preventDefault()
        const data = {
            Password: Pwd.Password,
            ConfirmPassword: Pwd.ConfirmPassword
        }
        axios.post(`${process.env.REACT_APP_API_URL}/password-reset/${userId}/${token}`, data)
            .then(res => {
                console.log(res.data)
                localStorage.removeItem('ResetPasswordUserId')
                localStorage.removeItem('ResetPasswordToken')
                Swal.fire(
                    'Done!',
                    'Password changed successfully!',
                    'success'
                )
                window.location = "/login"

            })
            .catch(err => {
                console.error(err);
                Swal.fire(
                    'Warning!',
                    'Uncorrect password!',
                    'warning'
                )
            })
    }

    const handleChangePwd = (e) => {

        setPwd({ ...Pwd, [e.target.name]: e.target.value })
    }

  return (
    <React.Fragment>
        <div id="loginform" >
                <img src='assets/img/logo.png' alt="logo" className='logo' />
                <div id="loginformcontainer">
                    <form onSubmit={resetPassword}>
                        <h3 style={{textAlign:"center"}}>Change your password</h3>
                        <br />
                        <br />
                        <div className='rowLogin'>
                            <label>New password:</label>
                            <input placeholder="Enter you password" type="password" 
                            name='Password' onChange={handleChangePwd} />
                            <br />
                            <label>Confirm new password:</label>
                            <input placeholder="Confirm you password" type="password" 
                            name='ConfirmPassword' onChange={handleChangePwd} />
                            <br />
                           
                        </div>
                        <a href="/login" className='forgotPass'><u>Back to sign in</u></a>
                        <a style={{ width: '100%' }}>
                            <div id='button' className='rowLogin'>
                                <button >Save</button>
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
