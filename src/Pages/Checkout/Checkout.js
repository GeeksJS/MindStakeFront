import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Checkout() {

  const Navigate = useNavigate()

  const Connected = JSON.parse(localStorage.getItem('user'))


  const [coins, setCoins] = useState()

  const [address, setAddress] = useState()


  Swal.fire(
    'Done!',
    'Your payment was successfull!',
    'success'
  ).then(async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/payment`)
      .then(res => {
        console.log(res.data.data[0].amount / 100)
        console.log((res.data.data[0].amount / 100) / 0.6)
        // console.log((res.data.data[0].created).toLocaleDateString())
        console.log((res.data.data[0].currency))
        console.log((res.data.data[0].status))

        const date = new Date((res.data.data[0].created) * 1000).toLocaleDateString()

        console.log(date)

        //setCoins((res.data.data[0].amount / 100) / 0.6)
        const qte = (res.data.data[0].amount / 100) / 0.6

        const data = {
          amount: res.data.data[0].amount / 100,
          created: date,
          currency: res.data.data[0].currency,
          status: res.data.data[0].status,
          User: Connected.userId
        }

        axios.post(`${process.env.REACT_APP_API_URL}/payment/add-transaction`, data)
          .then(async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/wallet/${Connected.userId}`)
              .then(async (res1) => {
                

                //setAddress(res1.data.address)
                console.log(res1.data.address)

                const data = {
                  recipient: res1.data.address,
                  amount: qte,
                  senderWalletAddress: "044b2bae1bb11aef295db332b35ffbc36bfb3a7c375eda12d3fd15b1fb15f945c24a1b691301fb6d6b3e655ca87a691159d7f075fddddaf590f1ce0cfbf6554d13"
                }

                await axios.post(`${process.env.REACT_APP_API_URL}/blockchain/transact`, data)
                  .then(async () => {
                    await axios.get(`${process.env.REACT_APP_API_URL}/blockchain/mine-transactions`)
                      .then(async () => {
                        const data = {
                          coins: qte
                        }
                        await axios.put(`${process.env.REACT_APP_API_URL}/blockchain/update-wallet/${Connected.userId}`, data)
                        .then( window.location.href = '/wallet')
                        
                        
                      })

                  })

              })
          })

      })
      .catch(err => {
        console.error(err);
      })
     
    
  })

  return (
    <React.Fragment>




    </React.Fragment>
  )
}
