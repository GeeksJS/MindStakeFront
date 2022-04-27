import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import './style.css'

export default function Wallet() {

    const Connected = JSON.parse(localStorage.getItem('user'))

    const [walletInfo, setWalletInfo] = useState({});
    const [transactions, setTransactions] = useState('');
    const [donations, setDonations] = useState('');




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

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3000/payment/transactions/${Connected.userId}`)
                .then(res => {
                    console.log(res.data)
                    setTransactions(res.data)

                })

        }
        fetchData().then()
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (Connected.Role === "Creator") {
                await axios.get(`http://localhost:3000/payment/donations-creator/${Connected.userId}`)
                    .then(res => {
                        console.log(res.data)
                        setDonations(res.data)

                    })
            }
            else {
                await axios.get(`http://localhost:3000/payment/donations-user/${Connected.userId}`)
                    .then(res => {
                        console.log(res.data)
                        setDonations(res.data)

                    })
            }


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
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Currency</th>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions && transactions.map((transaction, index) => (
                                            <tr>
                                                <td>{transaction.amount}$</td>
                                                <td>{transaction.currency}</td>
                                                <td className="">
                                                    {" "}
                                                    {transaction.created}
                                                </td>
                                                <td className="text-success">

                                                    Income <i className="fa fa-arrow-up" />
                                                </td>
                                                <td>
                                                    <label className="badge badge-success">{transaction.status}</label>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                        {donations && donations.map((donation, index) => (
                                            <tr>
                                                <td>{donation.amount}<small>Gc</small></td>
                                                <td>GeekCoin</td>
                                                <td className="">

                                                    {donation.created}
                                                </td>
                                                {Connected.Role === "Creator" ?
                                                    <td className="text-success">

                                                        Income <i className="fa fa-arrow-up" />
                                                    </td>
                                                    : <td className="text-danger">

                                                        Expense <i className="fa fa-arrow-down" />
                                                    </td>
                                                }
                                                <td>
                                                    <label className="badge badge-success">succeded</label>
                                                </td>
                                            </tr>
                                        ))
                                        }


                                        {/* <tr>
                                            <td>Pter parker</td>
                                            <td>Head light</td>
                                            <td className="text-success">
                                                {" "}
                                                22.00% <i className="fa fa-arrow-up" />
                                            </td>
                                            <td>
                                                <label className="badge badge-success">Completed</label>
                                            </td>
                                        </tr> */}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>



            </div>


        </React.Fragment >
    )
}
