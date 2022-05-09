import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Project/Projects';
import ProjectDetails from './Pages/Project/ProjectDetails';
import CreateProject from './Pages/Project/CreateProject';
import Navbar from './Pages/NavBar/Navbar';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/ResetPassword/ForgotPassword';
import Review from './Pages/Chatbot/Review';
import { Suspense, useEffect, useState } from 'react';
import BubbleChatbot from './Pages/BubbleChatbot/BubbleChatbot';
import ChatDialog from './Pages/ChatDialog/ChatDialog';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Pricing from './Pages/Pricing/Pricing';
import Register from './Pages/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import useToken from './UseToken';
import MyProjects from './Pages/Project/MyProjects';
import Messenger from './Pages/Messenger/Messenger';
import Bookmarks from './Pages/Project/Bookmarks';
import ScrollToTop from 'react-scroll-to-top';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import Proposal from './Pages/Proposal/Proposal';

import VideoCall from "./Pages/VideoChat/meeting";
import JoinMeeting from "./Pages/VideoChat/join";

import i18n from './i18n';
import LocaleContext from './LocaleContext';
import Loading from './Pages/Loading';
import ActivateAccount from './Pages/Register/ActivateAccount';
import InvestProcess from './Pages/InvestProcess/InvestProcess';
import Wallet from './Pages/Wallet/Wallet';
import ListProposal from './Pages/Proposal/ListProposal';
import ProposalForm from './Pages/Proposal/ProposalForm';
import CardPricingProject from './Pages/Pricing/CardPricingProject';

function App() {
  const [show, setShow] = useState(false)

  const { token, setToken } = useToken();

  //const [locale, setLocale] = useState(i18n.language);

  //i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const User = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='App'>
      <BrowserRouter>
        {(window.location.pathname !== "/login" && window.location.pathname !== "/linkedin" && window.location.pathname !== "/forgot-password" && window.location.pathname !== "/reset-password" && window.location.pathname !== "/register" && window.location.pathname !== "/activate-account" && window.location.pathname !== "/checkout") && <Navbar />}

        <Routes>
          <Route exact path='/login' element={
            <div className='bodyLogin'>
              <div className='container ' >
                <Login setToken={setToken} />
              </div>
            </div>
          }></Route>
          <Route exact path='/linkedin' element={
            <div className='bodyLogin'>
              <div className='container ' >
                <LinkedInCallback />

              </div>
            </div>
          }></Route>
          <Route exact path='/forgot-password' element={
            <div className='bodyLogin'>
              <div className='container ' >
                <ForgotPassword />
              </div>
            </div>
          }></Route>
          <Route exact path='/reset-password' element={
            <div className='bodyLogin'>
              <div className='container ' >
                <ResetPassword />
              </div>
            </div>
          }></Route>
          <Route exact path='/register' element={
            <div className='bodyRegister'>
              <div className='container ' >
                <Register setToken={setToken} />
              </div>
            </div>
          }></Route>
          <Route exact path='/activate-account' element={
            <div className='bodyRegister'>
              <div className='container ' >
                <ActivateAccount />
              </div>
            </div>
          }></Route>

          <Route exact path='/*' element={

            <Home />

          }></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route exact path='/detailProject/:id/*' element={<ProjectDetails />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/pricing' element={

            <Pricing />

          }></Route>
          <Route path='/confirm-payment' element={<Checkout />} ></Route>
          <Route path='/createproject' element={<CreateProject />}> </Route>
          <Route path='/myprojects' element={<MyProjects />}> </Route>
          <Route path='/messenger' element={<Messenger />}> </Route>
          <Route path='/bookmarks' element={<Bookmarks />}> </Route>

          <Route path='/invest-process' element={<ProposalForm />}> </Route>
          
          <Route path='/wallet/*' element={<Wallet />}> </Route>
          <Route path='/proposal/:id/:idOwner' element={<ProposalForm/>} ></Route>
          <Route exact path='/listproposal/:id' element={<ListProposal/>}></Route>
          <Route exact path='/chooseProject/:idPack' element={<CardPricingProject/>}></Route>

          <Route exact path="/join/:id" element={<JoinMeeting/>} />
          <Route exact path="/video/:id" element={<VideoCall/>} />

          


        </Routes>


        {window.location.pathname !== "/login" && window.location.pathname !== "/linkedin" && window.location.pathname !== "/forgot-password" && window.location.pathname !== "/reset-password" && window.location.pathname !== "/register" && window.location.pathname !== "/activate-account" && window.location.pathname !== "/checkout" && <Footer />}

      </BrowserRouter >
      <ScrollToTop smooth style={{ backgroundColor: '#02a95c', borderRadius: '50%', marginBottom: '60px', zIndex: '999' }} color='white'></ScrollToTop>
      {User && User.Role==="Creator" &&
        <ChatDialog style={{ backgroundColor: '#02a95c', borderRadius: '50%', zIndex: '999' }} />}
    </div >

  );
}

export default App;
