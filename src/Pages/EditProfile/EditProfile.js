import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function EditProfile(props) {
    const { User_id, openPopup, setOpenPopup } = props;
    const [profile, setProfile] = useState({ Role: "SimpleUser" })
    const [cvP, setCvP] = useState()
    const [imageP, setImageP] = useState()

    console.log(User_id)

    useEffect(() => {

        axios.get(`http://localhost:3000/users/${User_id}`)
            .then(res => {
                setProfile(res.data[0])
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    /******** */




    const doModify = (e) => {
        e.preventDefault()
        const dataI = new FormData();
        dataI.append("file", imageP)
        dataI.append("UserName", profile.UserName)
        dataI.append("FistName", profile.FistName)
        dataI.append("LastName", profile.LastName)
        dataI.append("Email", profile.Email)
        dataI.append("Password", profile.Password)
        dataI.append("Phone", profile.Phone)
        dataI.append("file", cvP)

        axios.post(`http://localhost:3000/users/update`+ User_id, dataI)
            .then(res => {
                if (res.data == null) {
                    Swal.fire(
                        'You should enter the correct password!',
                        '',
                        'warning'
                    )
                } else {


                }

            })
            .catch(err => {
                console.error(err);
            })
    }
    /** */
    const handleChange = (e) => {
        e.preventDefault()
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }
    const changeImage = (e) => {
        setImageP(e.target.files[0])

    }

    const changePdf = (e) => {
        setCvP(e.target.files[0])

    }

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component="div" style={{ flexGrow: 1 }}>Edit Profile</Typography>
                    <Button color='secondary' variant="outlined" onClick={() => { setOpenPopup(false) }}>X</Button></div>
            </DialogTitle>
            <DialogContent dividers>
                <div>
                    <div className="container">
                        <form onSubmit={doModify}>
                            <div className="tp-donations-details">

                                <div className="form-row" >
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">First Name</label>
                                        <input type="text" className="form-control" id="FistName" placeholder="FistName" value={profile.FistName} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">Last Name</label>
                                        <input type="text" className="form-control" id="LastName" placeholder="LastName" value={profile.LastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Email</label>
                                    <input type="email" className="form-control" id="Email" placeholder="Email" value={profile.Email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress2">Password</label>
                                    <input type="password" className="form-control" id="Password" placeholder="Password" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress2">New Password</label>
                                    <input type="password" className="form-control" id="Password" placeholder="Password" onChange={handleChange} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity">Phone</label>
                                        <input type="number" className="form-control" id="Phone" placeholder="Phone" value={profile.Phone} onChange={handleChange} />
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="inputCity">Change Your Photo</label>
                                        <input id="filee" placeholder="Enter you profile picture" type="file" name='ImageProfile' onChange={changeImage} />
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="inputCity">Change Your CV</label>
                                        <input id="filee" placeholder="Enter you profile picture" type="file" name='Cv' onChange={changePdf} />
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div></div>
            </DialogContent>

        </Dialog>
    )
}
