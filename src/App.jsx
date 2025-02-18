import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navbar'
import Home from './components/Home'
// import Infor from './components/Infor'
// import Footer from './components/Footer'
// import Data from './components/Data'
// import Data2 from './components/Data2'
// import Data3 from './components/Data3'
// import Data4 from './components/Data4'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Logo from './images/logo (1).svg'
import { FiBell } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import Infor from './components/Infor'

function App() {

  return (
    <>
      <Router>
        <nav className='flex   justify-between px-14 py-6 bg-white items-center'>
          <div className=''>
            <img src={Logo} />
          </div>
          <div>
            <ul className='flex gap-6 text-sm'>
              <li className=''>
                <Link to="Home">Home</Link>
              </li>
              <li>
                <Link> Stays</Link>
              </li>
              <li>
                <Link>Become a host</Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>


            <Link to="/SignIni"> Sign in</Link>


            <Link to="/SignUpi">Sign up</Link>




            <div className='flex gap-2'>
              <FiBell />
              <IoPersonOutline />
            </div>
          </div>
        </nav>
        {/* <MainPage/>
        <Section/>
      <Footer/>
      <Data />
      <Data2 />
      <Data3 />
      <Data4 /> */}
        <Routes>
          <Route path="/SignIni" element={<SignIn />}>

          </Route>
          <Route path="/SignUpi" element={<SignUp />}>

          </Route>
          <Route path="/Home" element={<Home />}>

          </Route>
          <Route path="/malumot/:id" element={<Infor />}>

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
