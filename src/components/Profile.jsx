import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import './Profile.css'

const Profile = ({user}) => {
  const navigate = useNavigate();

  const navToMyPosts = () => {
    navigate('profile/my_posts')
  }
  const navToMyMessages = () => {
    navigate('profile/my_messages')
  }


  return (
    <>
      <header>{user.username}'s Profile</header>
      <button type="button" onClick={navToMyPosts}>My Posts</button>
      <button type="button" onClick={navToMyMessages}>My Messages</button>     
        
      <Outlet />
    </>
  )
}

export default Profile