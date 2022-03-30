import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './style.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import axios from 'axios';
import { useForm } from "react-hook-form";

export default function CreateProject() {

    const Navigate = useNavigate()
    const [newproject, setNewProject] = useState({})
    const [Picture, setPicture] = useState()
    const [Video, setVideo] = useState()
    const User = JSON.parse(localStorage.getItem('user'))
    const { register, formState: { errors }, handleSubmit } = useForm();


    const CreateP = () => {
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
    }

    const handleChangeDate = (e) => {
        setNewProject({ ...newproject, [e.target.name]: e.target.value })
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
                            <form onSubmit={handleSubmit(CreateP)}>
                                <div className="tp-donations-amount">
                                    <h2>Create Project</h2>
                                    <input type="text" className="form-control" name="Title" id="Title" {...register("Title", { required: 'This field is required' })}
                                        value={newproject.Title} onChange={handleChange} placeholder="Enter your project title" />
                                    {errors.Title?.type === 'required' && !errors.Title.ref.value && <div className='alert-danger'>{errors.Title.message}</div>}
                                </div>
                                <div className="tp-donations-details">
                                    <h2>Project Details</h2>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <select id='select' className="form-control" name='Category'
                                                style={{ height: "48px" }} value={newproject.Category} onChange={handleChange} >
                                                <option> -- select an option -- </option>
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
                                            <label className='lab' style={{ display: "flex", justifyContent: 'start' }}>Select image</label>
                                            <input class="form-control1" type="file" name='Picture' {...register("Picture", { required: 'This field is required' })}
                                                id="formFile" onChange={changePicture} />
                                            {errors.Picture?.type === 'required' && !errors.Picture.ref.value && <div className='alert-danger'>{errors.Picture.message}</div>}
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
                                            <input type="text" className="form-control" name="Goal" id="Goal" {...register("Goal", {
                                                required: "This field is required !",
                                                pattern: {
                                                    value: /^\d+$/,
                                                    message: "Funding Details must be a number",
                                                },
                                            })}
                                                placeholder="Funding goal" value={newproject.Goal} onChange={handleChange} />
                                            {errors.Goal?.type === 'required' && !errors.Goal.ref.value && <div className='alert-danger'>{errors.Goal.message}</div>}
                                            {errors.Goal?.type === 'pattern' && <div className='alert-danger'>{errors.Goal.message}</div>}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <DatePickerComponent id="datepicker" style={{ height: "40px" }} name="EndDate" {...register("EndDate", { required: 'This field is required' })}
                                                placeholder="End date" value={newproject.EndDate} onChange={handleChangeDate} />
                                            {errors.EndDate?.type === 'required' && !errors.EndDate.ref.value && <div className='alert-danger'>{errors.EndDate.message}</div>}
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