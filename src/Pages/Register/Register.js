import { MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Login/login.css'


export default function Register() {

    const [userRole, setUserRole] = useState("Simple user")
    const changeRole = (e) => {

    }
    return (
        <div id="loginform" >
            <img src='assets/img/logo.png' alt="logo" className='logo' />
            <div>
                <form>
                    <div className='rowLogin'>
                        <label>UserName</label>
                        <input placeholder="Enter you userName" type="text" />
                        <br />
                        <label>Email</label>
                        <input placeholder="Enter you email" type="email" />
                        <br />
                        <label>Password</label>
                        <input placeholder="Enter you password" type="password" />
                        <br />
                        <label>Phone number</label>
                        <input placeholder="Enter you phone number" type="number" />
                        <br />
                        <label>profile  picture</label>
                        <input placeholder="Enter you profile picture" type="file" />
                        <br />
                        <label style={{ marginRight: '420px' }}>Role</label>
                        <select className='select' onChange={changeRole} >
                            <option >Select your role</option>
                            <option  value={"Creator"}>Creator</option>
                            <option value={"Investor"}>Investor</option>
                            <option value={"SimpleUser"}>Simple user</option>
                        </select>
                    </div>

                    <a href='/' style={{ width: '100%' }}>
                        <div id='button' className='rowLogin' >
                            <button >Register</button>
                        </div>

                    </a>
                    <div className='register'>
                        <p>already have an account? &nbsp;  </p>
                        <a href="/login">Login</a>
                    </div>
                </form>

            </div>
            <OtherMethods />
        </div>
    )

}





const OtherMethods = props => (
    <div id="alternativeLogin">
        <label>Or sign up with:</label>
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

