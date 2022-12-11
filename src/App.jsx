import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import { useForState, useStateDispatch } from "./initialState";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import { fetchPosts } from "./api/posts";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";
import Messages from "./components/Messages";

import "./App.css";

const App = () => {
	// const [state, dispatch] = useReducer(reducer, {token: localStorage.getItem('token'), user: {}, posts: []});
	const state = useForState();
	// console.log(state);
	const dispatch = useStateDispatch();

	useEffect(() => {
		const getMe = async () => {
			const userObj = await fetchMe(state.token);
			console.log(userObj); //this does print the correct user object
			dispatch({ type: 'setUser', payload: userObj }); //should update state of user but user is still an empty object afterwards
		};
		
		if (state.token) {
			getMe();
		}
		console.log(state);
	}, [state.token]);

	useEffect(() => {
		const getPosts = async () => {
			const apiPosts = await fetchPosts(state.token);
			console.log(apiPosts);
			dispatch({ type: "setPosts", payload: apiPosts });
		};
		getPosts();
		console.log(state);
	}, []);

	return (
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path='/post/:postId' element={<Post />} /> */}
					<Route path="/sign-in" element={<LoginForm />} />
					<Route path="/register" element={<Register />} />
					{/* <Route path="/send-message" element={<MessageForm />} /> */}
					<Route path="/profile" element={<Profile />}>
						<Route
							path="/profile/posts"
							element={<Posts />}
						/>
						<Route
							path="/profile/messages"
							element={<Messages />}
						/>
					</Route>
				</Routes>
			</div>
	);
};

export default App;
