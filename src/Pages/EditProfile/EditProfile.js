import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditProfile(props) {
    const { User_id, openPopup, setOpenPopup } = props;
    const [profile, setProfile] = useState({})
    const [cvP, setCvP] = useState()
    const [imageP, setImageP] = useState()
    const { register, formState: { errors }, handleSubmit } = useForm();



    useEffect(async () => {

        await axios.get(`http://localhost:3000/users/${User_id}`)
            .then(res => {
                setProfile(res.data[0])
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    /******** */



    const doModify = async (e) => {
        e.preventDefault()
        const data = new FormData();
        if (imageP && cvP) {


            data.append("imageProfile", imageP)
            data.append("FirstName", profile.FirstName)
            data.append("StartupName", profile.StartupName)
            data.append("LastName", profile.LastName)
            data.append("Email", profile.Email)
            data.append("Phone", profile.Phone)
            data.append("Cv", cvP)
        }
        else if (imageP && !cvP) {
       
            data.append("ImageProfile", imageP)
            data.append("FirstName", profile.FirstName)
            data.append("StartupName", profile.StartupName)
            data.append("LastName", profile.LastName)
            data.append("Email", profile.Email)
            data.append("Phone", profile.Phone)

        } else if (!imageP && cvP) {
        
            data.append("FirstName", profile.FirstName)
            data.append("StartupName", profile.StartupName)
            data.append("LastName", profile.LastName)
            data.append("Email", profile.Email)
            data.append("Phone", profile.Phone)
            data.append("Cv", cvP)
        } else {
            

            data.append("FirstName", profile.FirstName)
            data.append("StartupName", profile.StartupName)
            data.append("LastName", profile.LastName)
            data.append("Email", profile.Email)
            data.append("Phone", profile.Phone)
        }


        console.log("hethi l data", data)

        await axios.put(`http://localhost:3000/users/update/${User_id}`, data)
            .then(res => {
                setOpenPopup(false)
                Navigate('/profile')
                window.location.reload()
            })
            .catch(err => {
                console.error(err);
            })
    }


    /** */
    const handleChange = (e) => {

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
                                        <input type="text" className="form-control" id="FirstName" placeholder="FirstName"                                       
                                            name="FirstName"
                                             value={profile.FirstName} onChange={handleChange}
                                             />
                                        {errors.FirstName?.type === 'required' && !errors.FirstName.ref.value && <div className='alert-danger'>{errors.FirstName.message}</div>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">Last Name</label>
                                        <input type="text" className="form-control" id="LastName" placeholder="LastName"
                                            name="LastName" 
                                             value={profile.LastName} onChange={handleChange}
                                           
                                        />

                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Email</label>
                                    <input type="email" className="form-control" id="Email" placeholder="Email"
                                        name="Email"
                                        value={profile.Email} onChange={handleChange}
                                        />
                               
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity">Phone</label>
                                        <input type="number" className="form-control" id="Phone" placeholder="Phone" name="Phone" value={profile.Phone} onChange={handleChange} />
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="inputCity">Change Your Photo</label>
                                        <input id="filee" placeholder="Enter you profile picture" type="file" name='ImageProfile' onChange={changeImage} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">Startup Name</label>
                                        <input type="text" className="form-control" id="StartupName" placeholder="StartupName" name="StartupName" value={profile.StartupName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="inputCity">Change Your CV</label>
                                        <input id="filee" placeholder="Enter you profile picture" type="file" name='Cv' onChange={changePdf} />
                                    </div>

                                </div>
                                <div class="col-md-12 text-center">
                                    <button class="main-btn" type='submit'>Update Your Profile <i class="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div></div>
            </DialogContent>

        </Dialog>
    )
}