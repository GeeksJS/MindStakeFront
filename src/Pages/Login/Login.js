import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import './login.css'
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
import Swal from 'sweetalert2';
import { LinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';


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
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data)
            .then(res => {
             
                setToken(res.data.token)

                if (res.data.token) {
                    localStorage.setItem('user', JSON.stringify(res.data))
                    navigate('/')
                    window.location.reload()
                } else {
                    Swal.fire(
                        'Invalid credentials!',
                        '',
                        'warning'
                    )
                }



            })
            .catch(err => {
                console.error(err);
                Swal.fire(
                    'Invalid credentials!',
                    '',
                    'warning'
                )
            })
    }


    const OtherMethods = props => (
        <div id="alternativeLogin">
            <label>Or sign in with:</label>
            <div id="iconGroup">
                <Google />
                <Facebook />
                <br />

            </div>
            <div className='iconGroup' style={{ height: '50px' }}>
                <LinkedIn
                    clientId="778pwi5gutqz7v"
                    redirectUri={`https://mindstake.vercel.app`}
                    onSuccess={(code) => {
                        
                    }}
                    onError={(error) => {
                      
                    }}
                >
                    {({ linkedInLogin }) => (
                        <img
                            onClick={linkedInLogin}
                            src={linkedin}
                            alt="Sign in with Linked In"
                            style={{ maxWidth: '180px', cursor: 'pointer' }}
                        />
                    )}
                </LinkedIn>
            </div>
        </div>
    );


    //------------------- Begin Login with facebook Api consumer--------------
    const responseFacebook = (response) => {

        if (response.email === undefined) {
            const { value: email } = Swal.fire({
                title: 'Input email address',
                input: 'email',
                inputLabel: 'Your email address',
                inputPlaceholder: 'Enter your email address'
            }).then(result => {
                let email = result.value;
                axios({
                    method: "post",
                    url: `${process.env.REACT_APP_API_URL}/users/facebooklogin`,
                    data: { accessToken: response.accessToken, userID: response.userID, name: response.name, emailAdresse: email }
                }).then(response => {
                    
                    localStorage.setItem('token', JSON.stringify(response.data.token))
                    localStorage.setItem('user', JSON.stringify(response.data))
                    navigate('/')
                    window.location.reload()
                })
            });
        } else {
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/users/facebooklogin`,
                data: { accessToken: response.accessToken, userID: response.userID, name: response.name, emailAdresse: response.email }
            }).then(response => {
                
                localStorage.setItem('token', JSON.stringify(response.data.token))
                localStorage.setItem('user', JSON.stringify(response.data))
                navigate('/')
                window.location.reload()
            })
        }
    };
    const Facebook = props => (
        <FacebookLogin
            appId="810943683207241"
            autoLoad={false}
            callback={responseFacebook} />
    );

    //------------------- End Login with facebook Api consumer--------------

    //------------------- Begin Login with Google Api consumer--------------
    const responseSuccessGoogle = (response) => {
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/users/googlelogin`,
            data: { tokenId: response.tokenId }
        }).then(response => {
           
            localStorage.setItem('token', JSON.stringify(response.data.token))
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate('/')
            window.location.reload()
        })


    }
    const responseErrorGoogle = (response) => {
        
    }
    const Google = props => (


        <GoogleLogin
            clientId="900068590144-db1qb2lcn7vmbe5ung9u5vv5kstf6a76.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
        />

    );
    //------------------- End Login with facebook Api consumer--------------
    const [type, setType] = useState("password")

    const showPasswd = () => {
        if (type === "password") {
            setType("text")
        }
        if (type === "text") {
            setType("password")
        }
    }

    return (
        <div id="loginform" >
            <img src='assets/img/logo.png' alt="logo" className='logo' />
            <div id="loginformcontainer">
                <form onSubmit={doLogin}>
                    <div className='rowLogin'>
                        <label>Email</label>
                        <input placeholder="Enter you email" type="email" onChange={e => setEmail(e.target.value)} />
                        <br />
                        <label>Password</label>
                        <input placeholder="Enter you password" type={type} id="myPasswd" onChange={e => setPassword(e.target.value)} />
                        <br />

                    </div>
                    <div className='row' style={{marginLeft:'70px',marginBottom:'10px'}}>
                        <input style={{ width: '20px', height: '20px' }} type="checkbox" onClick={() => showPasswd()} />
                        &nbsp;&nbsp;<p>Show Password</p>
                    </div>
                    <Link to='/forgot-password' className='forgotPass'>Forgot password?</Link>
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





