import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import EditProfile from "./components/EditProfile";
import Profile from "./pages/Profile"
import Navbar from './components/Navbar';
function AllRoutes() {
  return (
    <>
        <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/editProfile" element={<EditProfile/>}/>
        <Route path="/myprofile" element={<Profile/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes