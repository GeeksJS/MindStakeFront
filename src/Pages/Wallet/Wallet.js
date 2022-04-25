import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import './style.css'

export default function Wallet() {

    const Connected = JSON.parse(localStorage.getItem('user'))

    const [walletInfo, setWalletInfo] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3000/blockchain/wallet/${Connected.userId}`)
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
                                        <small><bold>Balance:</bold> </small>{walletInfo.balance} <small>GC</small>
                                    </div>


                                </div>
                                <div style={{ marginTop: '-40px', marginLeft: '330px',position:'absolute'}}>
                                    <a href='https://buy.stripe.com/test_6oE9Ev0l2c6jepacMT'>
                                        <h6 style={{color:'white'}}> <i class="fas fa-arrow-right"></i> Buy</h6>
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </React.Fragment >
    )
}
