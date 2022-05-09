import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Comments from './Comments'
import Swal from 'sweetalert2'
import Description from './Description'
import EditProject from './EditProject'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkAdd';
import { green } from '@material-ui/core/colors'
import Proposal from '../Proposal/Proposal'
import axiosconfig from '../../axiosConfig'


export default function ProjectDetails() {

    let author


    //let pourcentage = 0

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
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupPW, setOpenPopupPW] = useState(false)

    let { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            await axiosconfig.get(`/projects/getproject/${id}`)
                .then(res => {
                    setProject(res.data[0])

                    if (!author) {
                        author = res.data[0].User
                    }
                    setDate(new Date(project.CreationDate))

                    // pourcentage = project.Raised / (100 * project.Goal)
                    
                    setEndDate(new Intl.DateTimeFormat('en-UK', { year: 'numeric', month: 'numeric', day: 'numeric'}).format(project.EndDate))
                    // start1 = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date)
                    setStartDate(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date))
                    // end1 = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(endDate)
                })
            await axiosconfig.get(`/users/${author}`)
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
                axiosconfig.delete(`/projects/deleteproject/${id}`)
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
        axiosconfig.post(`/bookmarks/addBookmark/${id}/${Connected.userId}`)
            .then(
                navigate('/bookmarks')
            )
    }

    const donation = () => {
        let qte;
        let sender;
        let receiver;

        if (dollar5) {
            qte = 5
        }
        if (dollar10) {
            qte = 10
        }
        if (dollar20) {
            qte = 20
        }
        if (dollar50) {
            qte = 50
        }
        if (dollar100) {
            qte = 100
        }
        const date = new Date(Date.now()).toLocaleDateString()

        const data = {
            amount: qte,
            created: date,
            Sender: Connected.userId,
            Receiver: user._id,
            Project: id
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, donate!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${process.env.REACT_APP_API_URL}/payment/add-donation`, data)
                    .then(async () => {
                        await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/wallet/${Connected.userId}`)
                            .then(async (res) => {
                                sender = res.data.address

                                await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/wallet/${user._id}`)
                                    .then(async () => {
                                        receiver = res.data.address

                                        const data = {
                                            recipient: receiver,
                                            amount: qte,
                                            senderWalletAddress: sender
                                        }

                                        await axios.post(`${process.env.REACT_APP_API_URL}/blockchain/transact`, data)
                                            .then(async () => {
                                                await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/mine-transactions`)
                                                    .then(async () => {
                                                        const data = {
                                                            coins: qte
                                                        }
                                                        await axios.put(`${process.env.REACT_APP_API_URL}/blockchain/update-wallet-minus/${Connected.userId}`, data)
                                                        await axios.put(`${process.env.REACT_APP_API_URL}/blockchain/update-wallet/${user._id}`, data)
                                                            .then(async () => {
                                                                const raised = project.Raised + (qte * 0.5)
                                                                const data = {
                                                                    Raised: raised
                                                                }
                                                                await axiosconfig.put(`/projects/updateprojectRaised/${id}`, data)
                                                                    .then(() => {
                                                                        Swal.fire(
                                                                            'Done!',
                                                                            'Donnation made successfully!',
                                                                            'success'
                                                                        )
                                                                    })
                                                                window.location.reload()


                                                            })



                                                    })
                                            })
                                    })
                            })

                    })
            }
        })


    }
    const [donations, setDonations] = useState();

    useEffect(async () => {
        await axiosconfig.get(`/payment/all-donations-byProject/${id}`).then((res) => {
            setDonations(res.data)
          
       
    })}, [])

    let pourcentage = (project.Raised * 100) / project.Goal;

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
                                <img src={`https://storage.googleapis.com/mindstake_bucket/${project.Picture}`} className="proj-img"
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
                                        <BookmarkBorderIcon style={{ transform: 'scale(1.5)' }} onClick={addBookmark} />
                                    </div>
                                </div>
                                <h3 className="project-title">
                                    {project.Title}
                                </h3>
                                <div className="meta">
                                    <div className="author">
                                        <img src={`https://storage.googleapis.com/mindstake_bucket/${user.ImageProfile}`}
                                            alt="Thumb" style={{ borderRadius: '50%', height: '50px', width: '50px' }} />
                                        <a href="#">{user.UserName}</a>
                                    </div>
                                    <a href="#" className="date">
                                        <i className="far fa-calendar-alt" />
                                        {new Date(project.CreationDate).toLocaleDateString("en-UK")}
                                    </a>
                                </div>
                                <div className="project-funding-info">
                                    <div className="info-box">
                                        <span>${project.Goal / 1000}k</span>
                                        <span className="info-title">Goal</span>
                                    </div>
                                    <div className="info-box">
                                        <span>{donations}</span>
                                        <span className="info-title">Donations</span>
                                    </div>
                                    <div className="info-box">
                                        <span>{new Date(project.EndDate).toLocaleDateString("en-UK")}</span>
                                        <span className="info-title">End Date</span>
                                    </div>
                                </div>
                                <div className="project-raised clearfix">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="raised-label">Raised of {project.Raised}</div>
                                        <div className="percent-raised">{pourcentage.toFixed(2)}%</div>
                                    </div>
                                    <div className="stats-bar" data-value={79}>
                                        <div className="bar-line" style={{ width: `${pourcentage}%` }} />
                                    </div>
                                </div>
                                <div className="project-form">
                                    <form action="#">
                                        {(Connected.Role === 'Investor' || Connected.Role === 'SimpleUser') && <ul className="donation-amount">
                                            <li className={dollar5 && 'dollar-5'} onClick={click5}>5&nbsp;<small>Gc</small></li>
                                            <li className={dollar10 && 'dollar-5'} onClick={click10}> 10&nbsp;<small>Gc</small></li>
                                            <li className={dollar20 && 'dollar-5'} onClick={click20}>20&nbsp;<small>Gc</small></li>
                                            <li className={dollar50 && 'dollar-5'} onClick={click50}>50&nbsp;<small>Gc</small></li>
                                            <li className={dollar100 && 'dollar-5'} onClick={click100}>100&nbsp;<small>Gc</small></li>
                                        </ul>
                                        }
                                        <br />

                                        {showEdit && <EditProject clicked={showEdit} close={setShowEdit} proj={project} />}
                                        {Connected.Role === 'SimpleUser' &&
                                            <div >
                                                <a type="submit" className="main-btn" onClick={donation}>
                                                    Donate Now <i className="fas fa-arrow-right" />
                                                </a>
                                            </div>
                                        }
                                        {Connected.Role === 'Investor' && Date.parse(project.EndDate) > Date.now() &&
                                            <div >
                                                <a type="submit" className="main-btn" onClick={donation}>
                                                    Donate Now <i className="fas fa-arrow-right" />
                                                </a>

                                                <Link to={`/proposal/${id}/${project.User}`} type="submit" className="main-btn" style={{ backgroundColor: 'rgba(255, 180, 40)', marginLeft: '30px', marginTop: '0px' }}>
                                                    Propose to cantact <i class="fab fa-facebook-messenger"></i>
                                                </Link>
                                            </div>
                                        }
                                        {Connected.Role === 'Creator' && Connected.userId === user._id &&
                                            <div >
                                                <a type="submit" className="main-btn" onClick={() => setShowEdit(true)}
                                                    style={{ backgroundColor: 'rgba(44, 130, 201)' }}>
                                                    Edit <i class='fas fa-edit'></i>
                                                </a>
                                                <button className="main-btn" onClick={handleDelete} hidden={project.Raised !== 0}
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
            {
                Connected.Role === "Investor" && openPopup && <Proposal
                    project_id={id}
                    owner={project.User}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                ></Proposal>
            }
        </React.Fragment>
    )
}
