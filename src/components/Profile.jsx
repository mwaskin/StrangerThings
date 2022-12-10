import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useForState } from "../initialState";

// import "./Profile.css";

const Profile = () => {
  const state = useForState();
	return (
		<>
			<header>
        <h1>{state.user.username}'s Profile</h1>
        <NavLink to='/profile/posts'>My Posts</NavLink>
        <NavLink to='/profile/messages'>My Messages</NavLink>
      </header>

			<Outlet />
		</>
	);
};

export default Profile;
