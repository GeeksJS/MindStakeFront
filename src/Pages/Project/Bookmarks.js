import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'
import axios from 'axios'
import axiosconfig from '../../axiosConfig'

export default function Bookmarks() {

    const Connected = JSON.parse(localStorage.getItem('user'))
    const [bookmarks, setBookmarks] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axiosconfig.get(`/bookmarks/getBookmarks/${Connected.userId}`);
                setBookmarks(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(bookmarks);

    }, []);

    const deleteBm =  (idProject , idUser) => {
         axiosconfig.delete(`/bookmarks/deleteBookmark/${idProject}/${idUser}`)
            .then(res => 
                 window.location.reload()
                )
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <React.Fragment>

            <section className="page-title-area">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">{Connected.UserName.charAt(0).toUpperCase() + Connected.UserName.slice(1)}'s Bookmarks</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>Bookmarks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-section section-gap-extra-bottom primary-soft-bg">
                <div className="container">
                    <div className="row project-items justify-content-center project-style-one">

                    {bookmarks &&
                            bookmarks.map((project, index) => (
                                <Project key={index} project={project} deleteBookmark={(idProject , idUser) => { deleteBm(idProject , idUser) }}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}