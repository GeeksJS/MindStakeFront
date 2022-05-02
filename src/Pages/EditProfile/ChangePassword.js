import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import axiosconfig from '../../axiosConfig'

export default function ChangePassword(props) {
    const { User_id, openPopupPW, setOpenPopupPW } = props;
    const [Pwd, setPwd] = useState({})



    /******** */



    const doModify = async (e) => {
        e.preventDefault()

        const data = {
            old_Password: Pwd.old_Password,
            new_Password: Pwd.new_Password,
            confirm_Password: Pwd.confirm_Password
        }

        await axios.put(`${process.env.REACT_APP_API_URL}/users/changePassword/${User_id}`, data)
            .then(res => {
                setOpenPopupPW(false)
                Navigate('/profile')
                window.location.reload()
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleChange = (e) => {

        setPwd({ ...Pwd, [e.target.name]: e.target.value })
    }
    /** */


    return (
        <Dialog open={openPopupPW}>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component="div" style={{ flexGrow: 1 }}>Change password</Typography>
                    <Button color='secondary' variant="outlined" onClick={() => { setOpenPopupPW(false) }}>X</Button></div>
            </DialogTitle>
            <DialogContent dividers>
                <div>
                    <div className="container">
                        <form onSubmit={doModify}>
                            <div className="tp-donations-details">

                                <div className="form-row" >
                                    <div className="form-group col-md-12">
                                        <label for="inputPassword4">Old Password</label>
                                        <input type="password" className="form-control" required id="old_Password" placeholder="old_Password" name="old_Password" value={Pwd.old_Password} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="inputPassword4">New  Password</label>
                                        <input type="password" className="form-control" id="new_Password" required placeholder="new_Password" name="new_Password" value={Pwd.new_Password} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="inputPassword4">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirm_Password" required placeholder="confirm_Password" name="confirm_Password" value={Pwd.confirm_Password} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-md-12 text-center">
                            <button class="main-btn" type='submit'>Change password<i class="fas fa-arrow-right"></i></button>
                            </div>


                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>

        </Dialog>
    )
}
