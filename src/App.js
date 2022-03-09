import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Project/Projects';
import ProjectDetails from './Pages/Project/ProjectDetails';
import Navbar from './Pages/NavBar/Navbar';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import { useEffect, useState } from 'react';
import BubbleChatbot from './Pages/BubbleChatbot/BubbleChatbot';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Pricing from './Pages/Pricing/Pricing';
import Register from './Pages/Register/Register';

function App() {
  const [show, setShow] = useState(false)



  return (
    <div className='App'>
      <BrowserRouter>
        {(window.location.pathname !== "/login" && window.location.pathname !== "/register") && <Navbar />}

        <Routes>
          <Route exact path='/login' element={
            <div className='bodyLogin'>
              <div className='container ' >
                <Login />
              </div>
            </div>
          }></Route>
          <Route exact path='/register' element={
            <div className='bodyRegister'>
              <div className='container ' >
                <Register />
              </div>
            </div>
          }></Route>
          <Route exact path='/*' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route exact path='/detailProject/*' element={<ProjectDetails />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>

        </Routes>


        {window.location.pathname !== "/login" && window.location.pathname !== "/register" && <Footer />}

      </BrowserRouter>

    </div>

  );
}

export default App;
