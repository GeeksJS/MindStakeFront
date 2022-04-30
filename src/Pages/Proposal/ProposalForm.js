import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';

import { Slider } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
export default function ProposalForm() {


  let { id } = useParams();
  let { idOwner } = useParams();

  const Connected = JSON.parse(localStorage.getItem('user'))
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [project, setProject] = useState({})
  const steps = ['Send your Proposal', 'Contact with Creator', 'Confirm Proposal', 'end Proposal'];
  const [val, setVal] = useState(0);
  const [user, setUser] = useState(0);
  const [proposal, setProposal] = useState({
    projectId: id,
    ownerId: idOwner,
    investorId: Connected.userId,
    object: "",
    amount: 1000,
    body: ""
  });
  const [St, setSt] = useState("")
  const [proposalverif, setProposalverif] = useState();
  useEffect(async () => {
    await axios.get(`http://localhost:3000/projects/getproject/${id}`)
      .then(async (res) => {
        setProject(res.data[0])
        await axios.get(`http://localhost:3000/proposal/getByInvestorandProject/${id}/${Connected.userId}`).then((res) => {
          setProposalverif(res.data)

          if (res.data.state === "Waiting") {
            
            setSt("Waiting")
            setActiveStep(1)
      
          }
          else if (res.data.state === "Approved") {
            
            setSt("Approved")
            setActiveStep(2)
         
        
          } else if (res.data.state === "Rejected") {
           
            setSt("Rejected")
            setActiveStep(1)
         
            
          }else{
            
            setSt("Accepted")
            setActiveStep(3)
           
          
          }
        }
        )
      }

      );
  }, [activeStep]);




  useEffect(async () => {
    await axios.get(`http://localhost:3000/users/${idOwner}`).then((res) => {
      setUser(res.data[0])
    })



  }, []);


  const totalSteps = () => {
    return steps.length;
  };



  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {

    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = (e) => {
    e.preventDefault()
    setSt("Waiting")

    axios.post(`http://localhost:3000/proposal/`, proposal)
      .then(
        Swal.fire(
          'Done!',
          'Your proposal has been submited!',
          'success'
        )

      )
      .then(() => {
        const headers = {
          'X-MAGICBELL-API-SECRET': 'NdMGvg+CgiAIxqic/ykB+NTLrDW2TkrAU69CEicA',
          'X-MAGICBELL-API-KEY': 'fe7dea920934062248bcb344699ce13d6a64cd73',
        };

        const data = {
          notification: {
            title: 'Task assigned to you: Upgrade to Startup plan',
            content: 'salem ya3tik sa7a. Thank you.',
            category: 'billing',
            action_url: 'https://magicbell.com/pricing',
            recipients: [{ email: user.Email }],
          },
        };

        axios.post('https://api.magicbell.com/notifications', data, { headers });
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();

      }

      )

  };


  const handleChange = (e, data) => {
    setVal(data)

    setProposal({ ...proposal, [e.target.name]: e.target.value })

  }
  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3000/proposal/${id}/${Connected.userId}`).then(
      setActiveStep(0)
    )
  }
  const handleMessage = (e, id) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/proposal/accept/${id}`).then(
      setActiveStep(3)

    )

}

  return (
    <React.Fragment>
      <section className=" page-title-area1 ">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <h1 className="page-title">Proposal Form </h1>
            </div>
            <div className="col-auto">
              <ul className="page-breadcrumb">
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>Proposal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ textAlign: 'left' }}>

        <div className="card social-prof" style={{ zIndex: '999' }}>
          <Box sx={{ width: '100%', paddingTop: "30px" }}>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}  
                  </StepButton>
                </Step>
               
              ))}
            </Stepper>
            <div>
              <div>
                {activeStep === 0 &&

                  <Typography sx={{ mt: 2, mb: 1, paddingTop: "50px" }} >

                    <form onSubmit={handleComplete}>
                      <label class="form-label " style={{ display: 'flex', justifyContent: 'start' }} >Object</label>
                      <input type="text" class="form-control" name="object" style={{ width: '1000px' }} value={proposal.object} onChange={handleChange} required />
                      <label class="form-label" style={{ paddingTop: '30px', display: 'flex', justifyContent: 'start' }} >Body</label>
                      <textarea type="text" class="form-control" name="body" style={{ width: '1000px', marginRight: '35px' }} value={proposal.body} onChange={handleChange} required></textarea>
                      <label class="form-label " style={{ paddingTop: '30px', display: 'flex', justifyContent: 'start' }} >Amount</label>
                      <div>
                        <Slider
                          name="amount"
                          value={val}
                          onChange={handleChange}
                          min={1000}
                          max={project.Goal}
                          style={{ color: "#14b761", height: "20px" }}
                        />
                        <label class="form-label" style={{ display: 'flex', justifyContent: 'end' }} >{val}</label>
                      </div>
                      <button class="main-btn" type='submit'>Send Your Proposal<i class="fas fa-arrow-right"></i></button>
                    </form>
                    {/* {activeStep + 1} */}
                  </Typography>
                }

                {activeStep === 1 && St === "Waiting" &&

                  <Typography sx={{ mt: 2, mb: 1, paddingTop: "50px" }} >
                    <div style={{ paddingBottom: "150px" }}>
                      <img src="/assets/img/hourglass.gif" alt="MindStake" />
                      <h4>Your proposal has been sent succefully</h4>
                      <h4>Waiting for creator's Approval</h4>
                      <br /><br />
                      <p>You will get notification once the creator accept or reject your proposal</p>
                    </div>

                  </Typography>
                }
                {activeStep === 1 && St === "Rejected" &&

                  <Typography sx={{ mt: 2, mb: 1, paddingTop: "50px" }} >
                    <div style={{ paddingBottom: "150px" }}>
                      <img src="/assets/img/Rejected.gif" alt="MindStake" />
                      <h4>Your proposal has been Rejected</h4>
                      <h4>You can try again</h4>
                      <br /><br />
                      <a type="submit" className="main-btn" onClick={(e) => handleDelete(e)}
                        style={{ backgroundColor: 'rgba(44, 130, 201)' }}>
                        Update Proposal <i class='fas fa-edit'></i>
                      </a>
                    </div>

                  </Typography>
                }

                {activeStep === 2 && St === "Approved" &&

                  <Typography sx={{ mt: 2, mb: 1, paddingTop: "50px" }} >
                    <div style={{ paddingBottom: "150px" }}>
                      <img src="/assets/img/contactus.gif" alt="MindStake" />
                      <h4>Creator Accept to contact you</h4>
                      <h4>He 's waiting for your message </h4>
                      <br /><br />
                      <a type="submit" className="main-btn" onClick={(e) => handleMessage(e,proposalverif._id)}
                        style={{ backgroundColor: 'rgba(44, 130, 201)' }}>
                        Send Message to creator <i class="fa fa-envelope"></i>
                      </a>
                      
                    </div>

                  </Typography>
                }
                
                {activeStep === 3 && St === "Accepted" &&

                  <Typography sx={{ mt: 2, mb: 1, paddingTop: "50px" }} >
                    <div style={{ paddingBottom: "150px" }}>
                      <img src="/assets/img/completed.gif" alt="MindStake" />
                      <h4>A new conversation has been added to your messenger</h4>
                      <h4>please contact the creator </h4>
                      <br /><br />
                    
                      
                    </div>

                  </Typography>
                }


              </div>

            </div>
          </Box>
        </div>
      </div>
    </React.Fragment>
  )
}