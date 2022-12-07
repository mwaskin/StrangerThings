import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { fetchMe } from './api/auth';
import { fetchPosts } from './api/posts';
import Header from './components/Header';
import Home from './components/Home';

import "./App.css";
import Register from './components/Register';
import LoginForm from './components/LoginForm';

const App = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);
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
			const apiPosts = await fetchPosts();
			console.log(apiPosts);
			setPosts(apiPosts);
		};
		getPosts();
	}, []);

  const signOut = () => {
    setToken(undefined);
    localStorage.clear();
    setUser({})
  }

  const navToHome = () => {
    navigate('/')
  }

  const navToRegister = () => {
    navigate('/register')
  }

  const navToSignIn = () => {
    navigate('/signIn')
  }

  return (
    <div className='root-container'>
      <Header user={user} token={token} signOut={signOut} navToRegister={navToRegister} navToSignIn={navToSignIn} navToHome={navToHome}/>
      <Routes>
        <Route path='/' element={<Home posts={posts} token={token} />}/>
        <Route path='register' element={<Register setToken={setToken} navToHome={navToHome}/>}/>
        <Route path='signIn' element={<LoginForm setToken={setToken} navToHome={navToHome}/>}/>
      </Routes>
      
    </div>
  )
}

export default App
