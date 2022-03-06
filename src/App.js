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

function App() {
  const [show, setShow] = useState(false)



  return (
    <div className='App'>
      <BrowserRouter>
        {window.location.pathname !== "/login" && <Navbar />}

        <Routes>
          <Route exact path='/login' element={
            <div className='bodyLogin'>
              <div className='container cont'>
                <Login />
              </div>
            </div>
          }></Route>
          <Route exact path='/*' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route exact path='/detailProject/*' element={<ProjectDetails />}></Route>

        </Routes>


        {window.location.pathname !== "/login" && <Footer />}

      </BrowserRouter>

    </div>

  );
}

export default App;
