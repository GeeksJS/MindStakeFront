import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Project/Projects';
import ProjectDetails from './Pages/Project/ProjectDetails';
import CreateProject from './Pages/Project/CreateProject';
import Navbar from './Pages/NavBar/Navbar';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Review from './Pages/Chatbot/Review';
import { useEffect, useState } from 'react';
import BubbleChatbot from './Pages/BubbleChatbot/BubbleChatbot';
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

function App() {
  const [show, setShow] = useState(false)

  const { token, setToken } = useToken();

  
  return (
    <div className='App'>
      <BrowserRouter>
        {(window.location.pathname !== "/login" && window.location.pathname !== "/register" && window.location.pathname !== "/checkout") && <Navbar />}

        <Routes>
          <Route exact path='/login' element={
            <div className='bodyLogin'>
              <div className='container ' >
                <Login setToken={setToken}/>
              </div>
            </div>
          }></Route>
          <Route exact path='/register' element={
            <div className='bodyRegister'>
              <div className='container ' >
                <Register setToken={setToken}/>
              </div>
            </div>
          }></Route>
          <Route exact path='/*' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route exact path='/detailProject/:id/*' element={<ProjectDetails />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/checkout' element={<Checkout /> } ></Route>
          <Route path='/createproject' element={<CreateProject />}> </Route>
          <Route path='/myprojects' element={<MyProjects />}> </Route>
          <Route path='/messenger' element={<Messenger/>}> </Route>
          <Route path='/bookmarks' element={<Bookmarks/>}> </Route>

        </Routes>


        {window.location.pathname !== "/login" && window.location.pathname !== "/register"  && window.location.pathname !== "/checkout" && <Footer />}

      </BrowserRouter>

    </div>

  );
}

export default App;
