import { MenuItem, Select } from '@material-ui/core';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Login/login.css'
import axios from "axios";




export default function Register({ setToken }) {
    localStorage.clear()

    const navigate = useNavigate()

    const filePicker = useRef()


    const [next, setNext] = useState(false)

    const [back, setBack] = useState(false)

    const [newuser, setNewUser] = useState({Role:"SimpleUser"})

    const [userRole, setUserRole] = useState("SimpleUser")

    const changeRole = (e) => {

        console.log(userRole)
        { document.getElementById('select').value !== "SimpleUser" && setNext(true) }
        { document.getElementById('select').value === "SimpleUser" && setNext(false) }

        filePicker.current.click()

        setNewUser({ ...newuser, [e.target.name]: e.target.value })

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
        document.getElementById('select').value = "SimpleUser"
        document.getElementById('cv').value = ""
        document.getElementById('selectCreator').value = ""
        document.getElementById('startup').value = ""
        document.getElementById('company').value = ""
        document.getElementById('address').value = ""

    }

    const doRegister = (e) => {
        e.preventDefault()
        const data = {
            UserName: newuser.UserName,
            Email: newuser.Email,
            Password: newuser.Password,
            Role: newuser.Role,
            Phone: newuser.Phone,
            Cv: newuser.Cv,
            StartupName: newuser.StartupName,
            Typecreator: newuser.Typecreator,
            CompanyName: newuser.CompanyName,
            Address: newuser.Address,
            ImageProfile: newuser.ImageProfile
        }
        axios.post(`http://localhost:3000/users/signup`, data)
            .then(res => {
                console.log(res)
                setToken(res.data.token)
                navigate('/')
                window.location.reload()
                console.log(localStorage.getItem('token'))
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleChange = (e) => {
        e.preventDefault()
        setNewUser({ ...newuser, [e.target.name]: e.target.value })
        console.log(newuser)
    }

    const onInputClick = (event) => {
        event.target.value = ''
    }


    return (
        <div id="loginform" >
            <a onClick={handleBackClick} style={{ color: "#484848", position: 'absolute', marginLeft: '-180px', marginTop: '30px' }} hidden={!back}>
                <i className="fas fa-arrow-left fa-2x" />
            </a>
            <img src='assets/img/logo.png' alt="logo" className='logo' />
            <div>
                <form onSubmit={doRegister}>
                    <div className='rowLogin' hidden={userRole !== "SimpleUser"}>
                        <label>UserName</label>
                        <input placeholder="Enter you userName" type="text" name='UserName' value={newuser.UserName} onChange={handleChange} />
                        <br />
                        <label>Email</label>
                        <input placeholder="Enter you email" type="email" name='Email' value={newuser.Email} onChange={handleChange} />
                        <br />
                        <label>Password</label>
                        <input placeholder="Enter you password" type="password" name='Password' value={newuser.Password} onChange={handleChange} />
                        <br />
                        <label>Phone number</label>
                        <input placeholder="Enter you phone number" type="number" name='Phone' value={newuser.Phone} onChange={handleChange} />
                        <br />
                        <label>profile  picture</label>
                        <input id="filee" placeholder="Enter you profile picture" type="file"  name='ImageProfile'  onChange={e=>setNewUser({ ...newuser, ImageProfile: e.target.files[0] })}
                          />
                          <p>{newuser.ImageProfile}</p>
                        <br />
                        <label style={{ marginRight: '420px' }}>Role</label>
                        <select defaultValue={"SimpleUser"} className='select' id='select' onChange={changeRole} name='Role' value={newuser.Role}
                        >
                            <option value={"Creator"}>Creator</option>
                            <option value={"Investor"}>Investor</option>
                            <option value={"SimpleUser"}>Simple user</option>
                        </select>
                    </div>
                    <div id='creator' className='rowLogin' hidden={userRole !== "Creator"}>
                        <label>CV</label>
                        <input id='cv' placeholder="Enter you Curriculum Vitae" type="file" name='Cv' value={newuser.Cv} onChange={handleChange} />
                        <br />
                        <label >Creator Type</label>
                        <select id='selectCreator' className='select' name='Typecreator' value={newuser.Typecreator} onChange={handleChange} >
                            <option value={"Individual"}>Individual</option>
                            <option value={"Startup"}>Startup</option>
                        </select>
                        <br />
                        <label>Startup Name</label>
                        <input id='startup' placeholder="Enter you Startup name" type="text" name='StartupName' value={newuser.StartupName} onChange={handleChange} />
                        <br />
                    </div>
                    <div className='rowLogin' hidden={userRole !== "Investor"}>
                        <label>Company Name</label>
                        <input id='company' placeholder="Enter you Company Name" type="text" name='CompanyName' value={newuser.CompanyName} onChange={handleChange} />
                        <br />
                        <label>Address</label>
                        <input id='address' placeholder="Enter you Address" type="text" name='Address' value={newuser.Address} onChange={handleChange} />
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

