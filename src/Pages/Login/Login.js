import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import axios from "axios";



export default function Login({ setToken }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const doLogin = (e) => {
        e.preventDefault()
        const data = {
            Email: email,
            Password: password
        }
        axios.post(`http://localhost:3000/users/login`, data)
            .then(res => {
                console.log(res.data)
                setToken(res.data.token)

                localStorage.setItem('user' , JSON.stringify(res.data))
         

                navigate('/')
                window.location.reload()

                console.log(localStorage.getItem('token'))
                console.log(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }


    const OtherMethods = props => (
        <div id="alternativeLogin">
            <label>Or sign in with:</label>
            <div id="iconGroup">
                <Facebook />
                <Twitter />
                <Google />
            </div>
        </div>
    );

    const Facebook = props => (
        <a>
            <i class="fab fa-facebook fa-3x icon-fb"></i>
        </a>
    );

    const Twitter = props => (
        <a href='#'>
            <i class="fab fa-twitter-square fa-3x icon-twitter"></i>
        </a>
    );

    const Google = props => (
        <i class="fab fa-google-plus-square fa-3x icon-google "></i>
    );



    return (
        <div id="loginform" >
            <img src='assets/img/logo.png' alt="logo" className='logo' />
            <div>
                <form onSubmit={doLogin}>
                    <div className='rowLogin'>
                        <label>Email</label>
                        <input placeholder="Enter you email" type="email" onChange={e => setEmail(e.target.value)} />
                        <br />
                        <label>Password</label>
                        <input placeholder="Enter you password" type="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <a href="#" className='forgotPass'>Forgot password?</a>
                    <a href='/' style={{ width: '100%' }}>
                        <div id='button' className='rowLogin'>
                            <button >login</button>
                        </div>

                    </a>
                    <div className='register'>
                        <p>Don't have an account? &nbsp;  </p>
                        <a href="/register">Register</a>
                    </div>
                </form>

            </div>
            <OtherMethods />
        </div>
    )

}





