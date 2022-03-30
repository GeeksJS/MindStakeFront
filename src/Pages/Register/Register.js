import { MenuItem, Select } from '@material-ui/core';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Login/login.css'
import axios from "axios";
import Swal from 'sweetalert2'

export default function Register({ setToken }) {
    localStorage.clear()
    const navigate = useNavigate()
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)
    const [newuser, setNewUser] = useState({ Role: "SimpleUser" })
    const [imageP, setImageP] = useState()
    const [cvP, setCvP] = useState()
    const [userRole, setUserRole] = useState("SimpleUser")

    const changeRole = (e) => {
        { document.getElementById('select').value !== "SimpleUser" && setNext(true) }
        { document.getElementById('select').value === "SimpleUser" && setNext(false) }
        setNewUser({ ...newuser, [e.target.name]: e.target.value })
    }


    const handleNextClick = (e) => {
        e.preventDefault();
        setUserRole(document.getElementById('select').value)
        setNext(false)
        setBack(true)
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        
        setBack(false)
        setUserRole("SimpleUser")
        setNewUser({
            ...newuser,
            Role:"SimpleUser",
           CompanyName: "",
           StartupName:"",
           Address:"",
           Typecreator: ""
          
        })
        setCvP()
      
    }

    const doRegister = (e) => {
        e.preventDefault()
        const dataI = new FormData();
        dataI.append("file", imageP)
        dataI.append("UserName", newuser.UserName)
        dataI.append("FirstName", newuser.FirstName)
        dataI.append("LastName", newuser.LastName)
        dataI.append("Email", newuser.Email)
        dataI.append("Password", newuser.Password)
        dataI.append("Phone", newuser.Phone)
        dataI.append("Role", newuser.Role)
        if (newuser.Role === "Creator") {
            dataI.append("file", cvP)
            dataI.append("StartupName", newuser.StartupName)
            dataI.append("Typecreator", newuser.Typecreator)
            dataI.append("Address", newuser.Address)
        }
        if (newuser.Role === "Investor") {
            dataI.append("CompanyName", newuser.CompanyName)
        }


        axios.post(`http://localhost:3000/users/signup`, dataI)
            .then(res => { 
                if(res.data == null){
                    Swal.fire(
                        'This email already exist!',
                        '',
                        'warning'
                      )
                }else{
                    setToken(res.data.token)
                    localStorage.setItem('user' , JSON.stringify(res.data))
                    navigate('/')
                    window.location.reload()
                }
               
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleChange = (e) => {
        e.preventDefault()
        setNewUser({ ...newuser, [e.target.name]: e.target.value })
    }

    const onInputClick = (event) => {
        event.target.value = ''
    }

    const changeImage = (e) => {
        setImageP(e.target.files[0])

    }

    const changePdf = (e) => {
        setCvP(e.target.files[0])

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
                        <label>FirstName</label>
                        <input placeholder="Enter you FirstName" type="text" name='FirstName' value={newuser.FirstName} onChange={handleChange} />
                        <br />
                        <label>LastName</label>
                        <input placeholder="Enter you LastName" type="text" name='LastName' value={newuser.LastName} onChange={handleChange} />
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
                        
                        <input id="filee" placeholder="Enter you profile picture" type="file" name='ImageProfile' onChange={changeImage}
                        />

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
                        <input id='cv' placeholder="Enter you Curriculum Vitae" type="file" name='Cv'  onChange={changePdf} />
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

