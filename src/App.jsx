import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { fetchMe } from './api/auth';
import { fetchPosts, deletePost, updatePost } from './api/posts';
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
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
	const [posts, setPosts] = useState([]);
	//fetchs posts if the user updates them
	const [postFlag, setPostFlag] = useState(0);
	const navigate = useNavigate();

	//Fetched the user object from a given token.
	useEffect(() => {
		const getMe = async () => {
			const userObj = await fetchMe(token);
			setUser(userObj);
      localStorage.setItem('user', JSON.stringify(userObj))
		};
		if (token) {
			getMe();
		}
	}, [token, posts]);

	useEffect(() => {
		const getPosts = async () => {
			const apiPosts = await fetchPosts(token);
			setPosts(apiPosts);
		};
		getPosts();
	}, [postFlag]);

	const updatePosts = () => {
		setPostFlag(postFlag + 1);
	};

  const signOut = () => {
    setToken(undefined);
    localStorage.clear();
    setUser({});
    updatePosts()
    navToHome();
  }
  
  const editPost = async (postId, body) => {
    const updatedPost = await updatePost(token, postId, body);
    updatePosts()
  }

	const removePost = (postId) => {
		deletePost(token, postId);
		setPosts(removePostFromState(posts, postId));
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

  const navToProfile = () => {
    navigate('/profile/my_posts');
  }


  return (
    <div className='root-container'>
      <Header user={user} token={token} signOut={signOut} navToRegister={navToRegister} navToSignIn={navToSignIn} navToHome={navToHome} navToProfile={navToProfile}/>
      <Routes>
        <Route path='/' element={<Home posts={posts} token={token} setPosts={setPosts} removePost={removePost} editPost={editPost}/>}/>
        <Route path='register' element={<Register setToken={setToken} navToHome={navToHome}/>}/>
        <Route path='signIn' element={<LoginForm setToken={setToken} navToHome={navToHome} updatePosts={updatePosts}/>}/>
        <Route path='profile' element={<Profile user={user}/>}>
          <Route path='my_posts' element={<UserPosts user={user} removePost={removePost}/>}/>
          <Route path='my_messages' element={<UserMessages user={user}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
