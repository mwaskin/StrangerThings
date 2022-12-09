import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// import "./Profile.css";

const Profile = ({ user }) => {
	// const navigate = useNavigate();

	// const navToMyPosts = () => {
	// 	navigate("profile/my_posts");
	// };
	// const navToMyMessages = () => {
	// 	navigate("profile/my_messages");
	// };

	return (
		<>
			<header>{user.username}'s Profile</header>
			<NavLink to='/profile/posts'>My Posts</NavLink>
			<NavLink to='/profile/messages'>My Messages</NavLink>

			<Outlet />
		</>
	);
};

export default Profile;
