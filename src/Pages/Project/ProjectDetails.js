import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Comments from './Comments'
import Swal from 'sweetalert2'
import Description from './Description'
import EditProject from './EditProject'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkAdd';
import { green } from '@material-ui/core/colors'


export default function ProjectDetails() {

    let author
    let end1 = 0
    let start1 = 0
    let pourcentage = 0

    const Connected = JSON.parse(localStorage.getItem('user'))
    const [dollar5, setDollar5] = useState(false)
    const [dollar10, setDollar10] = useState(false)
    const [dollar20, setDollar20] = useState(false)
    const [dollar50, setDollar50] = useState(false)
    const [dollar100, setDollar100] = useState(false)


    const [project, setProject] = useState({})
    const [user, setUser] = useState({})
    const [date, setDate] = useState()
    const [endDate, setEndDate] = useState()
    const [startDate, setStartDate] = useState()
    const [showEdit, setShowEdit] = useState(false)
    let { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3000/projects/getproject/${id}`)
                .then(res => {
                    setProject(res.data[0])
                    if (!author) {
                        author = res.data[0].User
                    }
                    setDate(new Date(project.CreationDate))
                    pourcentage = project.Raised / (100 * project.Goal)
                    setEndDate(new Date(project.EndDate))
                    start1 = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date)
                    setStartDate(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date))
                    end1 = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(endDate)
                })
            await axios.get(`http://localhost:3000/users/${author}`)
                .then(res => {
                    setUser(res.data[0]);
                })
        }
        fetchData().then(project, user)
    }, []);
    const click5 = () => {
        setDollar5(true)
        setDollar10(false)
        setDollar20(false)
        setDollar50(false)
        setDollar100(false)

    }
    const click10 = () => {
        setDollar5(false)
        setDollar10(true)
        setDollar20(false)
        setDollar50(false)
        setDollar100(false)


    }
    const click20 = () => {
        setDollar5(false)
        setDollar10(false)
        setDollar20(true)
        setDollar50(false)
        setDollar100(false)


    }
    const click50 = () => {
        setDollar5(false)
        setDollar10(false)
        setDollar20(false)
        setDollar50(true)
        setDollar100(false)


    }
    const click100 = () => {
        setDollar5(false)
        setDollar10(false)
        setDollar20(false)
        setDollar50(false)
        setDollar100(true)

    }

    const handleEdit = (e) => {
        e.preventDefault()
        setShowEdit(true)
    }



    const handleDelete = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/projects/deleteproject/${id}`)
                    .then(
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then(
                            navigate('/myprojects')
                        )
                    )
            }
        })
    }

    const addBookmark = () => {
        axios.post(`http://localhost:3000/bookmarks/addBookmark/${id}/${Connected.userId}`)
            .then(
                navigate('/bookmarks')
            )
    }


    const donate = () => {
        //navigate('https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op' ,{replace:true})
        // window.location.replace('https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op')
        <Link to={{ pathname: 'https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op' }}></Link>
    }
    return (
        <React.Fragment>
            <section className="page-title-area" >
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">Project Details</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>Project Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-details-area section-gap-extra-bottom">
                <div className="container">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-lg-6 col-md-10">
                            <div className="project-thumb mb-md-50">
                                <img src={`http://localhost:3000/uploads/images/${project.Picture}`} className="proj-img"
                                    alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-summery ">
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'start', padding: '15px 0px' }}>
                                    <a className="category " >
                                        {project.Category}
                                    </a>
                                    <div className="bookmarkIcon" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to bookmarks">
                                        {/* <span >Add to bookmarks</span> */}
                                        <BookmarkBorderIcon style={{transform:'scale(1.5)'}} onClick={addBookmark} />
                                    </div>
                                </div>
                                <h3 className="project-title">
                                    {project.Title}
                                </h3>
                                <div className="meta">
                                    <div className="author">
                                        <img src={`http://localhost:3000/uploads/images/${user.ImageProfile}`}
                                            alt="Thumb" style={{ borderRadius: '50%', height: '50px', width: '50px' }} />
                                        <a href="#">{user.UserName}</a>
                                    </div>
                                    <a href="#" className="date">
                                        <i className="far fa-calendar-alt" />
                                        {startDate}
                                    </a>
                                </div>
                                <div className="project-funding-info">
                                    <div className="info-box">
                                        <span>${project.Goal / 1000}k</span>
                                        <span className="info-title">Goal</span>
                                    </div>
                                    <div className="info-box">
                                        <span>9</span>
                                        <span className="info-title">Backers</span>
                                    </div>
                                    <div className="info-box">
                                        <span>{end1 - start1}</span>
                                        <span className="info-title">Days Left</span>
                                    </div>
                                </div>
                                <div className="project-raised clearfix">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="raised-label">Raised of {project.Raised}</div>
                                        <div className="percent-raised">{pourcentage}%</div>
                                    </div>
                                    <div className="stats-bar" data-value={79}>
                                        <div className="bar-line" />
                                    </div>
                                </div>
                                <div className="project-form">
                                    <form action="#">
                                        {(Connected.Role === 'Investor' || Connected.Role === 'SimpleUser') && <ul className="donation-amount">
                                            <li className={dollar5 && 'dollar-5'} onClick={click5}>$5</li>
                                            <li className={dollar10 && 'dollar-5'} onClick={click10}> $10</li>
                                            <li className={dollar20 && 'dollar-5'} onClick={click20}>$20</li>
                                            <li className={dollar50 && 'dollar-5'} onClick={click50}>$50</li>
                                            <li className={dollar100 && 'dollar-5'} onClick={click100}>$100</li>
                                        </ul>
                                        }
                                        <br />

                                        {showEdit && <EditProject clicked={showEdit} close={setShowEdit} proj={project} />}
                                        {Connected.Role === 'SimpleUser' &&
                                            <div >
                                                <a type="submit" className="main-btn" href='https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op'>
                                                    Donate Now <i className="fas fa-arrow-right" />
                                                </a>
                                            </div>
                                        }
                                        {Connected.Role === 'Investor' &&
                                            <div >
                                                <a type="submit" className="main-btn" href='https://buy.stripe.com/test_8wMcQHaZG6LZ0yk6op'>
                                                    Donate Now <i className="fas fa-arrow-right" />
                                                </a>
                                                <button type="submit" className="main-btn" style={{ backgroundColor: 'rgba(255, 180, 40)', marginLeft: '30px', marginTop: '0px' }}>
                                                    Contact <i class="fab fa-facebook-messenger"></i>
                                                </button>
                                            </div>
                                        }
                                        {Connected.Role === 'Creator' && Connected.userId === user._id &&
                                            <div >
                                                <a type="submit" className="main-btn" onClick={() => setShowEdit(true)}
                                                    style={{ backgroundColor: 'rgba(44, 130, 201)' }}>
                                                    Edit <i class='fas fa-edit'></i>
                                                </a>
                                                <button type="submit" className="main-btn" onClick={handleDelete}
                                                    style={{ backgroundColor: 'rgba(255, 0, 0, 0.8)', marginLeft: '30px', marginTop: '0px' }}>
                                                    Delete <i class='fas fa-trash-alt' style={{ fontSize: '15px' }}></i>
                                                </button>
                                            </div>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <ul class="nav nav-tabs tabs" >
                                <li class="nav-item"><Link className={window.location.pathname === "/detailProject" ? "nav-link ps-0 active" : "nav-link px-2 px-md-3"} id="description-tab" data-bs-toggle="tab" to="" role="tab" aria-selected="true">Description</Link></li>
                                <li class="nav-item"><Link className={window.location.pathname === "/detailProject/comment" ? "nav-link ps-0 active" : "nav-link px-2 px-md-3"} id="reviews-tab" data-bs-toggle="tab" to="comment" role="tab" aria-selected="false">Reviews</Link></li>
                            </ul>

                            <Routes>
                                <Route path='' element={<Description />}></Route>
                                <Route path='comment' element={
                                    // <div className='container'>
                                    <Comments idProject={id} />
                                }></Route>
                            </Routes>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}