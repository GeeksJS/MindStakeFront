import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Proposal.css'
export default function ListProposal() {
    const Connected = JSON.parse(localStorage.getItem('user'));
    const [ListProp, setListProp] = useState();
    const [etat, setEtat] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`http://localhost:3000/proposal/owner/${Connected.userId}`).then(res => {
                    setListProp(res.data);
                    console.log("this my data ", res)
                }

                )

            } catch (error) {
                console.error(error)
            }
        };
        fetchData().then(ListProp);

    }, [etat]);
    const ApproveAction = (id) => {
        axios.put(`http://localhost:3000/proposal/accepte/${id}`).then(
            setEtat(!etat)
        
        )
    }

    const DeclineAction = (id) => {
        axios.put(`http://localhost:3000/proposal/reject/${id}`).then(
            setEtat(!etat)
        )
    }

    return (
        <div><table class="table">
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
                {ListProp && ListProp.map((value, index) => {
                    return (
                        <tr>
                            <th scope="row">{value.object}</th>
                            <td>{value.body}</td>
                            <td>{value.amount}</td>
                            <td>{value.state}</td>
                           {value.state ==="Waiting" ? <td>
                                <div class="proposalbtn">
                                    <button class="btn btn-outline-success " onClick={()=>ApproveAction(value._id)}> Accept</button>
                                    <button class="btn btn-outline-danger" style={{ backgroundColor: "red" }} onClick={()=>DeclineAction(value._id)}> Reject</button>
                                </div>
                            </td> : value.state ==="Approved" ? <div>Check Your Messenger  </div>:<div> thank you wish you good luck!!</div>}
                            
                                
                            
                        </tr>
                    )

                })}

            </tbody>
        </table></div>
    )
}
