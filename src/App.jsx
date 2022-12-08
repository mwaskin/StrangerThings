import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { fetchMe } from './api/auth';
import { fetchPosts, deletePost } from './api/posts';
import { removePostFromState } from './helpers';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import UserPosts from './components/UserPosts';
import UserMessages from './components/UserMessages';

import "./App.css";

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
	}, [token, posts]); // Update the user if the token changes

	useEffect(() => {
		const getPosts = async () => {
			const apiPosts = await fetchPosts(token);
			setPosts(apiPosts);
		};
		getPosts();
	}, [postFlag]); //when postFlag increments this useEffect will run again

  const updatePosts = () => {
    setPostFlag(postFlag + 1);
  }

  const signOut = () => {
    setToken(undefined);
    localStorage.clear();
    setUser({});
    updatePosts()
    navToHome();
  }

  const removePost = (postId) => {
    deletePost(token, postId);
    setPosts(removePostFromState(posts, postId));
  }

  const navToHome = () => {
    navigate('/');
  }

  const navToRegister = () => {
    navigate('/register');
  }

  const navToSignIn = () => {
    navigate('/signIn');
  }

  const navToProfile = () => {
    navigate('/profile');
  }


  return (
    <div className='root-container'>
      <Header user={user} token={token} signOut={signOut} navToRegister={navToRegister} navToSignIn={navToSignIn} navToHome={navToHome} navToProfile={navToProfile}/>
      <Routes>
        <Route path='/' element={<Home posts={posts} token={token} setPosts={setPosts} removePost={removePost}/>}/>
        <Route path='register' element={<Register setToken={setToken} navToHome={navToHome}/>}/>
        <Route path='signIn' element={<LoginForm setToken={setToken} navToHome={navToHome} updatePosts={updatePosts}/>}/>
        <Route path='profile' element={<Profile user={user}/>}>
          <Route path='profile/my_posts' element={<UserPosts user={user} removePost={removePost}/>}/>
          <Route path='profile/my_messages' element={<UserMessages user={user}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
