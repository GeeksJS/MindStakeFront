import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import  axios  from "axios";


async function loginUser(credentials) {
    return fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [login, setLogin] = useState({Email:"",Password:""})



    // const doLogin = (e) => {
    //     e.preventDefault()
    //     const data = {
    //         Email: email,
    //         Password: password
    //     }
    //    // console.log(process.env.REACT_APP_API_URL)
    //     axios.post(`http://localhost:3000/users/login`, data)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }


    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );


    const Form = props => (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email"  onChange={e => setEmail(e.target.value)}/>
                <FormInput description="Password" placeholder="Enter your password" type="password" name="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <a href="#" className='forgotPass'>Forgot password?</a>
                <a href='/' style={{ width: '100%' }}>
                    <FormButton title="Login" />
                </a>
                <div className='register'>
                    <p>Don't have an account? &nbsp;  </p>
                    <a href="/register">Register</a>
                </div>
            </form>
        </div>
    );

    const FormButton = props => (
        <div id="button" class="rowLogin">
            <button>{props.title}</button>
        </div>
    );

    const FormInput = props => (
        <div class="rowLogin">
            <label>{props.description}</label>
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    );

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
            <Form />
            <OtherMethods />
        </div>
    )

}





