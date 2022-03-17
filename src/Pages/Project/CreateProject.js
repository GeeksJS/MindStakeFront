import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './style.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import axios from 'axios';

export default function CreateProject() {

    const Navigate = useNavigate()
    const [newproject, setNewProject] = useState({})
    const [Picture, setPicture] = useState()
    const [Video, setVideo] = useState()
    const User = JSON.parse(localStorage.getItem('user'))


    const CreateP = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("Description", newproject.Description)
        data.append("Title", newproject.Title)
        data.append("Category", newproject.Category)
         data.append("EndDate", newproject.EndDate)
        data.append("Goal", newproject.Goal)
        // data.append("Raised", newproject.Raised)
        data.append("file", Picture)
        data.append("file", Video)
        // data.append("SocialMedia", newproject.SocialMedia)
        // data.append("Approved", newproject.Approved)

        axios.post(`http://localhost:3000/projects/addproject/` + User.userId, data)
            .then(res => {
                Navigate('/myprojects')
                window.location.reload()
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleChange = (e) => {
        e.preventDefault()
        setNewProject({ ...newproject, [e.target.name]: e.target.value })
        console.log(newproject)
    }

    const handleChangeDate = (e) => {
        setNewProject({...newproject, [e.target.name]: e.target.value })
        console.log(newproject)
    }

    const changePicture = (e) => {
        setPicture(e.target.files[0])

    }

    const changeVideo = (e) => {
        setVideo(e.target.files[0])

    }

    return (
        <React.Fragment>
            <section className="page-title-area">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">Create Project</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>Create Project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2'>
                        <div id="Donations">
                            <form onSubmit={CreateP}>
                                <div className="tp-donations-amount">
                                    <h2>Create Project</h2>
                                    <input type="text" className="form-control" name="Title" id="Title"
                                        placeholder="Enter your project title" value={newproject.Title} onChange={handleChange} />
                                </div>
                                <div className="tp-donations-details">
                                    <h2>Project Details</h2>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">

                                            <select id='select' className="form-control" name='Category' style={{ height: "48px" }}
                                                value={newproject.Category} onChange={handleChange}>
                                                <option >Choose category...</option>
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

                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                            <label for="image" className='lab' style={{ display: "flex", justifyContent: 'start' }}>Select image</label>
                                            <input class="form-control1" type="file" name='Picture' id="formFile" onChange={changePicture} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <label for="video" style={{ display: "flex", justifyContent: 'start' }}>Select video</label>
                                            <input type="file" className="form-control" name="video" id="video" onChange={changeVideo} />
                                        </div>
                                        <div className="col-lg-12 col-12 form-group">
                                            <textarea className="form-control" name="Description" id="note"
                                                placeholder="Description" value={newproject.Description} onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="tp-donations-details">
                                    <h2>Funding Details</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="number" className="form-control" name="Goal" id="Goal"
                                                placeholder="Funding goal" value={newproject.Goal} onChange={handleChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <DatePickerComponent id="datepicker" style={{ height: "40px" }} name="EndDate"
                                                placeholder="End date" value={newproject.EndDate} onChange={handleChangeDate} />
                                        </div>

                                    </div>
                                </div>

                                <button class="main-btn" type='submit'>Create <i class="fas fa-arrow-right"></i></button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </React.Fragment>
    )
}