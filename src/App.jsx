import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchMe } from "./api/auth";
import { fetchPosts } from "./api/posts";
import Header from "./components/Header";
import Home from "./components/Home";

import "./App.css";
import Register from "./components/Register";
import LoginForm from "./components/LoginForm";

const App = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);
	//fetchs posts if the user updates them
	const [postFlag, setPostFlag] = useState(0);
	const navigate = useNavigate();

	//Fetched the user object from a given token.
	useEffect(() => {
		const getMe = async () => {
			const userObj = await fetchMe(token);
			setUser(userObj);
		};
		//Only run getMe() if we have a token
		if (token) {
			getMe();
		}
	}, [token]); // Update the user if the token changes

	useEffect(() => {
		const getPosts = async () => {
			const apiPosts = await fetchPosts(token);
			setPosts(apiPosts);
		};
		getPosts();
	}, [postFlag]); //when postFlag increments this useEffect will run again

	//write new func to change posts in state on account change so isAuthor will update without API call

	const updatePosts = () => {
		setPostFlag(postFlag + 1);
	};

	const signOut = () => {
		setToken(undefined);
		localStorage.clear();
		setUser({});
		updatePosts();
	};

	const navToHome = () => {
		navigate("/");
	};

	const navToRegister = () => {
		navigate("/register");
	};

	const navToSignIn = () => {
		navigate("/signIn");
	};

	return (
		<div className="root-container">
			<Header
				user={user}
				token={token}
				signOut={signOut}
				navToRegister={navToRegister}
				navToSignIn={navToSignIn}
				navToHome={navToHome}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home posts={posts} token={token} updatePosts={updatePosts} />
					}
				/>
				<Route
					path="register"
					element={<Register setToken={setToken} navToHome={navToHome} />}
				/>
				<Route
					path="signIn"
					element={
						<LoginForm
							setToken={setToken}
							navToHome={navToHome}
							updatePosts={updatePosts}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
