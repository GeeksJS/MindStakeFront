import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function EditProject(props) {

    let { id } = useParams();

    const { clicked, close, proj } = props;
    const [project, setProject] = useState(proj)
    const [pic, setPic] = useState(proj.Picture)
    const [vid, setVid] = useState(proj.Video)

    const handleChange = (e) => {
          setProject({...project , [e.target.name]: e.target.value})
    }

    const changePicture = (e) => {
        setPic(e.target.files[0])
    }

    const changeVideo = (e) => {
        setVid(e.target.files[0])
    }

    const doUpdate = (e) =>{
        e.preventDefault()
        const data = new FormData();
        data.append("Title", project.Title)
        data.append("Goal", project.Goal)
        data.append("Category", project.Category)
        data.append("file", pic)
        data.append("file", vid)
        data.append("Description", project.Description)
        console.log(data)
        axios.put(`http://localhost:3000/projects/updateproject/${id}` , data)
        .then(res => {
            console.log("updated")
            window.location.reload()
        })
        .catch(err => {
            console.error(err);
        })
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
                <form onSubmit={doUpdate}>
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
                                <input id="filee" type="file" name='Picture' onChange={changePicture}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Video</label>
                                <input id="filee" type="file" name='Video' onChange={changeVideo}/>
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
