import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Button } from '@material-ui/core';



export default function EditProject(props) {

    const { clicked, close, proj } = props;
    const proj1 = {proj}
    const [project, setProject] = useState(proj)

    
console.log(proj)
    const handleChange = (e) => {
         setProject({...project , [e.target.name]: e.target.value})

    }

    return (
        <Dialog open={clicked}>
            <DialogTitle >
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        Edit Project
                    </Typography>
                    <a onClick={() => close(false)}><i class='fas fa-window-close fa-lg' style={{ color: 'red' }}></i>
                    </a>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <form >
                    <div className="tp-donations-details">
                        <div>
                            <label>Title</label>
                            <input type="text" className="form-control" name='Title'
                             id="Title" placeholder="Title" value={project.Title} onChange={handleChange}/>
                        </div>
                        <br />
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label>Goal</label>
                                <input type="number" className="form-control" id="Goal" name='Goal'
                                 placeholder="Goal" value={project.Goal} onChange={handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Category</label>
                                <select id='select' className="form-control" name='Category'
                                 style={{ height: "48px" }} value={project.Category} onChange={handleChange}>
                                    <option >Art</option>
                                    <option >Illustrations</option>
                                    <option >Technology</option>
                                    <option >Cinema</option>
                                    <option >Creation</option>
                                    <option >Gaming</option>
                                    <option >Music</option>
                                    <option >Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label>Picture</label>
                                <input id="filee" type="file" name='Picture' />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Video</label>
                                <input id="filee" type="file" name='Video' />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" id="Description" name='Description'
                             placeholder="Description" value={project.Description} onChange={handleChange}></textarea>
                        </div>
                        <button class="main-btn" type='submit' style={{marginLeft:"35%"}}>Edit <i class="fas fa-arrow-right"></i></button>
                    </div> 
                </form>
            </DialogContent>
        </Dialog>
    )
}
