import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';


export default function Transactions() {

    const Connected = JSON.parse(localStorage.getItem('user'))

    const [transactions, setTransactions] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/payment/transactions/${Connected.userId}`)
                .then(res => {
                    console.log(res.data)
                    setTransactions(res.data)

                })

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
                        {currentItems && currentItems.map((transaction, index) => (
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
            setCurrentItems(transactions.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(transactions.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % transactions.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <div style={{display:'flex',justifyContent:'center'}}>
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
