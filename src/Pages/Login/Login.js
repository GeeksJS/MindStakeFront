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
        axios.post(`http://localhost:3000/users/login`, data)
            .then(res => {
                console.log(res.data)
                setToken(res.data.token)

                localStorage.setItem('user', JSON.stringify(res.data))


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
                <Google />
                <Facebook />
                <br />

            </div>
            <div className='iconGroup' style={{height:'50px'}}>
                <LinkedIn
                    clientId="778pwi5gutqz7v"
                    redirectUri={`http://localhost:3002/`}
                    onSuccess={(code) => {
                        console.log(code);
                    }}
                    onError={(error) => {
                        console.log(error);
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
                    url: "http://localhost:3000/users/facebooklogin",
                    data: { accessToken: response.accessToken, userID: response.userID, name: response.name, emailAdresse: email }
                }).then(response => {
                    console.log("facebook login success, client side", response);
                    localStorage.setItem('token', JSON.stringify(response.data.token))
                    localStorage.setItem('user', JSON.stringify(response.data))
                    navigate('/')
                    window.location.reload()
                })
            });
        } else {
            axios({
                method: "post",
                url: "http://localhost:3000/users/facebooklogin",
                data: { accessToken: response.accessToken, userID: response.userID, name: response.name, emailAdresse: response.email }
            }).then(response => {
                console.log("facebook login success, client side", response);
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
            url: "http://localhost:3000/users/googlelogin",
            data: { tokenId: response.tokenId }
        }).then(response => {
            console.log("Google login success", response);
            localStorage.setItem('token', JSON.stringify(response.data.token))
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate('/')
            window.location.reload()
        })


    }
    const responseErrorGoogle = (response) => {
        console.log(response);
    }
    const Google = props => (


        <GoogleLogin
            clientId="517644931989-igjmauces87orj0hvdr03168js1458e8.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
        />

    );
    //------------------- End Login with facebook Api consumer--------------


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
                        <input placeholder="Enter you password" type="password" onChange={e => setPassword(e.target.value)} />
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





