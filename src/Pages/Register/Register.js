import { MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Login/login.css'


export default function Register() {

    const [next, setNext] = useState(false)
    const [register, setRegister] = useState(false)

    const [back, setBack] = useState(false)


    const [userRole, setUserRole] = useState("SimpleUser")

    const changeRole = (e) => {

        console.log(userRole)
        { document.getElementById('select').value !== "SimpleUser" && setNext(true) }
        { document.getElementById('select').value === "SimpleUser" && setNext(false) }

    }


    const handleNextClick = (e) => {
        e.preventDefault();
        setUserRole(document.getElementById('select').value)
        console.log(userRole)
        setNext(false)
        setBack(true)
        // setUserRole("SimpleUser")
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        setBack(false)
        setUserRole("SimpleUser")
        //setNext(false)
        document.getElementById('select').value="SimpleUser"
        document.getElementById('cv').value=""
        document.getElementById('selectCreator').value=""
        document.getElementById('startup').value=""
        document.getElementById('company').value=""
        document.getElementById('address').value=""


    }



    return (
        <div id="loginform" >
            <a onClick={handleBackClick} style={{color:"#484848",position:'absolute',marginLeft:'-180px',marginTop:'30px'}} hidden={!back}>
                <i className="fas fa-arrow-left fa-2x" />
            </a>
            <img src='assets/img/logo.png' alt="logo" className='logo' />
            <div>
                <form>
                    <div className='rowLogin' hidden={userRole !== "SimpleUser"}>
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
                        <select className='select' id='select' onChange={changeRole} >
                            <option value={"Creator"}>Creator</option>
                            <option value={"Investor"}>Investor</option>
                            <option selected value={"SimpleUser"}>Simple user</option>
                        </select>
                    </div>
                    <div id='creator' className='rowLogin' hidden={userRole !== "Creator"}>
                        <label>CV</label>
                        <input id='cv' placeholder="Enter you Curriculum Vitae" type="file" />
                        <br />
                        <label >Creator Type</label>
                        <select id='selectCreator' className='select'  >
                            <option value={"Individual"}>Individual</option>
                            <option value={"Startup"}>Startup</option>
                        </select>
                        <br />
                        <label>Startup Name</label>
                        <input id='startup' placeholder="Enter you Startup name" type="text" />
                        <br />
                    </div>
                    <div className='rowLogin' hidden={userRole !== "Investor"}>
                        <label>Company Name</label>
                        <input id='company' placeholder="Enter you Company Name" type="text" />
                        <br />
                        <label>Address</label>
                        <input id='address' placeholder="Enter you Address" type="text" />
                        <br />

                    </div>


                    <a href='/' style={{ width: '100%' }} hidden={next === true}>
                        <div id='button' className='rowLogin' >
                            <button >Register</button>
                        </div>
                    </a>

                    <a style={{ width: '100%' }} hidden={next === false}>
                        <div id='button' className='rowLogin' >
                            <button onClick={handleNextClick}>Next</button>
                        </div>
                    </a>
                    <div className='register'>
                        <p>already have an account? &nbsp;  </p>
                        <a href="/login">Login</a>
                    </div>
                </form>

            </div>
            <br />
            <br />
            {/* <OtherMethods /> */}
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

