import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'


class Login extends React.Component {

    
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
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password" />
        <a href="#" className='forgotPass'>Forgot password?</a>
        <a href='/' style={{width:'100%'}}>
            <FormButton title="Login" />
        </a>
        <div className='register'>
            <p>Don't have an account? &nbsp;  </p>
            <a href="#">Register</a>
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

export default Login;