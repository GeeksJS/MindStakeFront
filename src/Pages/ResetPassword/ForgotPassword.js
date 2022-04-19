import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function ForgotPassword() {

    const [email, setEmail] = useState("")

    const resetPassword = (e) => {
        e.preventDefault()
        const data = {
            Email: email
        }
        axios.post(`http://localhost:3000/password-reset`, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('ResetPasswordUserId', JSON.stringify(res.data.ResetPasswordUserId))
                localStorage.setItem('ResetPasswordToken', JSON.stringify(res.data.ResetPasswordToken))
                Swal.fire(
                    'Done!',
                    'Email sent successfully!',
                    'success'
                )

            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <React.Fragment>
            <div id="loginform" >
                <img src='assets/img/logo.png' alt="logo" className='logo' />
                <div id="loginformcontainer">
                    <form onSubmit={resetPassword}>
                        <h3 style={{ textAlign: "center" }}>Find Your Account</h3>
                        <br />
                        <br />
                        <div className='rowLogin'>
                            <label>Please enter your email address:</label>
                            <input placeholder="Enter you email" type="email" onChange={e => setEmail(e.target.value)} />
                            <br />

                        </div>
                        <a href="#" className='forgotPass'><u>Back to sign in</u></a>
                        <a href='/' style={{ width: '100%' }}>
                            <div id='button' className='rowLogin'>
                                <button >Reset password</button>
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
