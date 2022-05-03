import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import './style.css'
import axiosconfig from '../../axiosConfig'

export default function CardPricingProject() {
    const [Myprojects, setMyprojects] = useState('')
    let { idPack } = useParams()
    const User = JSON.parse(localStorage.getItem('user'))

    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axiosconfig.get(`/projects/getProjectByUser/${User.userId}`);
                setMyprojects(response);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(Myprojects);
    }, []);
    useEffect(() => {
        axiosconfig.get(`/users/${User.userId}`)
            .then(res => {
                setUser(res.data[0]);
            })
    }, []);
    const [pack, setPack] = useState()
    useEffect(async () => {
        await axiosconfig.get(`/packs/${idPack}`)
            .then((res) => {
                setPack(res.data[0])
                    console.log("hello", res.data[0])

            })
    }
        , [])
    const [selected, SetSelected] = useState(false)
    const [idProject, SetIdProject] = useState()
    let sender;
    let receiver;
    let qte ;
    const handleSelect = (id) => {
        SetSelected(true)
        SetIdProject(id)

    }
    const navigate = useNavigate()
    const handleBuy = (e, idPr, idPa) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, buy this pack!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosconfig.post(`/projects/BuyPackForProject/${idPa}/${idPr}`)
                    .then(
                        Swal.fire(
                            'Done!',
                            'Pack added to your project.',
                            'success'
                        ).then(async () => {
                            await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/wallet/${User.userId}`)
                                .then(async (res) => {
                                    sender = res.data.address
                                    await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/wallet/62311109e8aaa2c137724f3e`)
                                        .then(async () => {
                                            receiver = res.data.address
                                            const data = {
                                                recipient: receiver,
                                                amount: pack.Price / 0.6,
                                                senderWalletAddress: sender
                                            }
                                            await axios.post(`${process.env.REACT_APP_API_URL}/blockchain/transact`, data)
                                                .then(async () => {
                                                    await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/mine-transactions`)
                                                        .then(async () => {
                                                            const data = {
                                                                coins: pack.Price / 0.6
                                                            }
                                                            await axios.put(`${process.env.REACT_APP_API_URL}/blockchain/update-wallet-minus/${User.userId}`, data)
                                                            await axios.put(`${process.env.REACT_APP_API_URL}/blockchain/update-wallet/62311109e8aaa2c137724f3e`, data)
                                                                .then(async () => {
                                                                            window.location.href="/Pricing"
                                                                })
                                                        })
                                                    })
                                                }
                                                )
                                        })
                                }

                                )
                    )
            }
        })
    }
    return (
        <React.Fragment>
            <>
                <section className="page-title-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-8">
                                <h1 className="page-title">Choose a project</h1>
                            </div>
                            <div className="col-auto">
                                <ul className="page-breadcrumb">
                                    <li>
                                        <Link to='/'>Home</Link>

                                    </li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*====== Page Title End ======*/}
                {/*====== Pricing Area Start ======*/}
                <section className="pricing-section section-gap-two primary-soft-bg">
                    <div className="container">
                        <div className="row project-items justify-content-center project-style-one ">
                            {Myprojects &&
                                Myprojects.map((project, index) => (
                                    <div id="myProject" className="col-lg-4 col-md-6 col-sm-10" >
                                        <div className={selected && project._id === idProject ? "project-item mb-30 selected" : "project-item mb-30"}>
                                            <div
                                                className="thumb"
                                                style={{
                                                    backgroundImage: `url(${process.env.REACT_APP_API_URL}/uploads/images/${project.Picture})`
                                                }}
                                            />
                                            <div className="content">
                                                <div className="cats">
                                                    <a href="#">{project.Category}</a>

                                                </div>

                                                <div className="author">
                                                    <img src={`${process.env.REACT_APP_API_URL}/uploads/images/${user.ImageProfile}`} alt="Thumb" />
                                                    <a href="#">{user.UserName}</a>
                                                </div>
                                                <h5 id="myTitle" className="title">

                                                    {project.Title}

                                                </h5>
                                                <div className="project-stats">
                                                    <div className="stats-value">
                                                        <span className="value-title">
                                                            Raised of <span className="value">${project.Raised}</span>
                                                        </span>
                                                    </div>

                                                </div>

                                                <button className="main-btn " style={{ backgroundColor: 'rgba(44, 130, 201)', marginTop: "20px", width: "100%" }} onClick={() => handleSelect(project._id)}>Select</button>
                                            </div>
                                        </div>


                                    </div>
                                ))}

                        </div>
                        <button className="main-btn " style={{ backgroundColor: '#02a95c', marginTop: "20px", width: "50%" }} hidden={!selected} onClick={(e) => handleBuy(e, idProject, idPack)}>Next</button>
                    </div>
                </section>
            </>

        </React.Fragment>
    )
}
