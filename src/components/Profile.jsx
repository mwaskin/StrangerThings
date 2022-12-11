import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import './styles/Profile.css'

const Profile = ({user}) => {
  const navigate = useNavigate();

  const navToMyPosts = () => {
    navigate('my_posts')
  }
  const navToMyMessages = () => {
    navigate('my_messages')
  }


  return (
    <>
      <div className="profile-buttons">
        <header>{user.username}'s Profile</header>
        <button type="button" onClick={navToMyPosts}>My Posts</button>
        <button type="button" onClick={navToMyMessages}>My Messages</button>
      </div>
      
      <Outlet />
    </>
  )
}

export default Profile