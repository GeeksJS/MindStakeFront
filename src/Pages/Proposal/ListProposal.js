import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axiosconfig from '../../axiosConfig'

import './Proposal.css'
export default function ListProposal() {
    const Connected = JSON.parse(localStorage.getItem('user'));
    const [ListProp, setListProp] = useState('');
    const [etat, setEtat] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await axiosconfig.get(`/proposal/owner/${Connected.userId}`).then(res => {
                    setListProp(res.data);
                  
                }

                )

            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(ListProp);

    }, [etat]);
    const ApproveAction = (id) => {
        axiosconfig.put(`/proposal/approve/${id}`).then(
            setEtat(!etat)

        )
    }

    const DeclineAction = (id) => {
        axiosconfig.put(`/proposal/reject/${id}`).then(
            setEtat(!etat)
        )
    }

    function Items({ currentItems }) {
        return (
            <div className="table-responsive">

                <table className="table table-hover" >
                    <thead>
                        <tr>

                            <th scope="col">Object</th>
                            <th scope="col">Body</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.map((value, index) => {
                            return (
                                <tr>
                                    <td scope="row">{value.object}</td>
                                    <td>{value.body}</td>
                                    <td>{value.amount}</td>
                                    <td>
                                        <label style={{width:'80px'}} className={value.state === "Approved" ?  "badge badge-success": value.state === "Accepted"?  "badge badge-success" : value.state === "Waiting" ? "badge badge-warning" : "badge badge-danger"}>{value.state}</label>
                                    </td>
                                    {value.state === "Waiting" ?
                                        <td>
                                            <div class="proposalbtn">
                                                <button class="badge badge-success" style={{width:'70px',height:'30px',borderRadius:'10%',marginRight:'10px'}} onClick={() => ApproveAction(value._id)}> Accept</button>
                                                <button class="badge badge-danger" style={{width:'70px',height:'30px',borderRadius:'10%'}} onClick={() => DeclineAction(value._id)}> Reject</button>
                                            </div>
                                        </td> : value.state === "Approved" ? <td>Waiting for investor to contact you</td> : value.state === "Rejected" ? <td> thank you wish you good luck!!</td> : <td>check your messages</td>}



                                </tr>
                            )

                        })}

                    </tbody>
                </table>


            </div>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
           
            setCurrentItems(ListProp.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(ListProp.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % ListProp.length;
           
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}

                    />
                </div>
            </>
        );
    }


    return (
        <div>
            <section className=" page-title-area1 ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">{Connected.UserName.charAt(0).toUpperCase() + Connected.UserName.slice(1)}'s Investments list</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>Proposal List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container" style={{ textAlign: 'left' }}>

                <div className="card social-prof" style={{ zIndex: '999' }}>
                    <div className="card">
                        <div className="card-body">
                            <h2 >Investment proposal list</h2>
                            <br />
                            <PaginatedItems itemsPerPage={4} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
