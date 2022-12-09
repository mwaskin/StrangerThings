import React, { useState, useEffect, useReducer } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { reducer } from "./initialState";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import { fetchPosts } from "./api/posts";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => {
	const [state, dispatch] = useReducer(reducer, {token: localStorage.getItem('token'), user: {}, posts: []});
	const {token, user, posts} = state;
	
	// const setToken = (newToken) => {
	// 	dispatch({ type:'setToken', payload: newToken})
	// }

	useEffect(() => {
		const getMe = async () => {
			const userObj = await fetchMe(token);
			dispatch({ type: 'setUser', payload: userObj });
		};
		//Only run getMe() if we have a token
		// console.log(token);
		if (token) { //why is it getting past here?
			// console.log(token);
			getMe();
		}
	}, [token]); // Update the user if the token changes

	useEffect(() => {
		const getPosts = async () => {
			const apiPosts = await fetchPosts();
			dispatch({ type: "setPosts", payload: apiPosts });
		};
		getPosts();
	}, []);

	return (
		<div>
			<Header token={token} />
			<Routes>
				<Route path="/" element={<Home token={token} posts={posts} />} />
				<Route path='/sign-in' element={<LoginForm token={token} setToken={(payload) => dispatch(payload)} />}/>
				<Route path='/register' element={<Register />}/>
				<Route path="/profile" element={<Profile user={user}/>}>
					<Route path='/profile/posts' element={<Posts posts={user.posts}/>}/>
					{/* <Route path='/profile/messages' element={<Messages messages={user.messages}/>}/> */}
				</Route>

			
			</Routes>
		</div>
	);
};

export default App;
