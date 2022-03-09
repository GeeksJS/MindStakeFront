import { MenuItem, Select } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/login.css'


class Register extends React.Component {


    render() {
        return (
            <div id="loginform" >
                <img src='assets/img/logo.png' alt="logo" className='logo' />
                <Form />
                <OtherMethods />
            </div>
        )
    }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);



const Form = props => (
    <div>

        <FormInput description="Firstname" placeholder="Enter your firstname" type="text" />
        <FormInput description="Lastname" placeholder="Enter your lastname" type="text" />
        <FormInput description="Phone number" placeholder="Enter your phone number" type="number" />
        <br/>
        <label style={{ marginRight: '420px' }}>Role</label>
        <select  className='select'>
            <option>Select your role</option>
            <option>Creator</option>
            <option>Investor</option>
            <option>Simple user</option>
        </select>
        <FormInput description="Email" placeholder="Enter your email" type="email" />
        <FormInput description="Password" placeholder="Enter your password" type="password" />
        
        <a href='/' style={{ width: '100%' }}>
            <FormButton title="Register" />
        </a>
        <div className='register'>
            <p>You already have an account? &nbsp;  </p>
            <a href="/login">Login</a>
        </div>
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
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);

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

export default Register;