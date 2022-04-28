import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';


export default function Donations() {

    const Connected = JSON.parse(localStorage.getItem('user'))

    const [donations, setDonations] = useState('');


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

    function Items({ currentItems }) {
        return (
            <div className="table-responsive">

                <table className="table table-hover" >
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
                        {currentItems && currentItems.map((donation, index) => (
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
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(donations.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(donations.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % donations.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
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
        <React.Fragment>
            <PaginatedItems itemsPerPage={4} />

        </React.Fragment>
    )
}
