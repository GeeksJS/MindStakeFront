import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link, useParams } from 'react-router-dom'
import EditProfile from '../EditProfile/EditProfile'
import EditProfileInvestor from '../EditProfile/EditProfileInvestor'
import EditProfileUser from '../EditProfile/EditProfileUser'
import ChangePassword from '../EditProfile/ChangePassword'
import axios from 'axios'
import { faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons'
import Project from '../Project/Project'
import ProjectCard from '../Project/ProjectCard'
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import axiosconfig from '../../axiosConfig'


export default function Proposal(props) {
    const Connected = JSON.parse(localStorage.getItem('user'))
    const { project_id, owner,openPopup, setOpenPopup  } = props;
   
    const [proposal, setProposal] = useState({
        projectId: project_id,
        ownerId: owner,
        investorId: Connected.userId,
        object:"",
        amount:0,
        body:""
    })







    const doModify = async (e) => {
        e.preventDefault()
        
        await axiosconfig.post(`/proposal/`, proposal)
            .then(() => {
                setOpenPopup(false)
            }



            )
            .catch(err => {
                console.error(err);
            })

    }

    const handleChange = (e) => {

        setProposal({ ...proposal, [e.target.name]: e.target.value })
    }
    /** */


    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component="div" style={{ flexGrow: 1 }}>Make Propasal</Typography>
                    <Button color='secondary' variant="outlined" onClick={() => { setOpenPopup(false) }}>X</Button></div>
            </DialogTitle>
            <DialogContent dividers>
                <div>
                    <div className="container">
                        <form onSubmit={doModify}>
                            <div class="mb-3">
                                <label class="form-label">Object</label>

                                <input type="text" class="form-control" name="object" value={proposal.object} onChange={handleChange} required />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Body</label>
                                <input type="text" class="form-control" name="body" value={proposal.body} onChange={handleChange} required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Amount</label>
                                <input type="number" class="form-control" name="amount" value={proposal.amount} onChange={handleChange} required />
                            </div>
                            <div class="col-md-12 text-center">
                                <button class="main-btn" type='submit'>Send <i class="fas fa-arrow-right"></i></button>
                            </div>


                        </form>

                    </div>
                </div >
            </DialogContent >

        </Dialog >
    )
}