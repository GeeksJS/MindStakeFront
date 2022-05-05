import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate';


import './style.css'
import Transactions from './Transactions';
import Donations from './Donations';
import Swal from 'sweetalert2';

export default function Wallet() {

    const Connected = JSON.parse(localStorage.getItem('user'))

    const [walletInfo, setWalletInfo] = useState({});

    const Navigate = useNavigate()


    {
        !Connected.isActivated &&
            Swal.fire(
                'Account activation required!',
                'Please activate your account!',
                'warning'
            ).then(() => Navigate('/'))
    }


    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/wallet/${Connected.userId}`)
                .then(res => {
                    console.log(res.data)
                    setWalletInfo(res.data)

                })

        }
        fetchData().then()
    }, []);







    return (
        <React.Fragment>
            <section className=" page-title-area1 ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">{Connected.UserName.charAt(0).toUpperCase() + Connected.UserName.slice(1)}'s Wallet</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>Wallet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container" style={{ textAlign: 'left' }}>

                <div className="card social-prof" style={{ zIndex: '999' }}>
                    <div className="card-body">
                        <div className="credit-card-box">
                            <div className="">
                                <div className="front" >
                                    <div className="chip" />
                                    <div className="logo">
                                        <i className="fab fa-gg-circle fa-2x fa-spin"></i>
                                    </div>
                                    <div style={{ paddingTop: '30px', paddingRight: '70px' }}>
                                        <h5 style={{ color: 'white' }}>{Connected.UserName.charAt(0).toUpperCase() + Connected.UserName.slice(1)}'s Wallet</h5>
                                    </div>
                                    <div className="number">
                                        <small><bold>Balance:</bold> </small>{Number(walletInfo.balance).toFixed(0)} <small>GC</small>
                                    </div>


                                </div>
                                <div style={{ marginTop: '-40px', marginLeft: '330px', position: 'absolute' }}>
                                    <a href='https://buy.stripe.com/test_6oE9Ev0l2c6jepacMT'>
                                        <h6 style={{ color: 'white' }}> <i class="fas fa-arrow-right"></i> Buy</h6>
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>


                    <div className="card">
                        <div className="card-body">
                            <h2 >Transactions history</h2>
                            <br />
                            <div className="col-12">
                                <nav>
                                    <div class="nav nav-tabs tabs">
                                        <Link to='' className={window.location.pathname === "/wallet" ? "nav-link ps-0 active" : "nav-link px-2 px-md-3"} aria-selected="true">Transactions</Link>
                                        <Link to='donations' className={window.location.pathname === "/wallet/donations" ? "nav-link ps-0 active" : "nav-link px-2 px-md-3"} aria-selected="false" >Donations</Link>
                                    </div>
                                </nav>

                                <Routes>
                                    <Route path='' element={<Transactions />}></Route>
                                    <Route path='donations' element={<Donations />}></Route>
                                </Routes>

                            </div>
                            
                        </div>
                    </div>


                </div>



            </div>


        </React.Fragment >
    )
}
