import React, { useState, useEffect } from 'react';
import Register from './components/Register'
import { fetchMe } from './api/auth';
import { fetchPosts } from './api/posts';
import Posts from './components/Posts';

import './App.css'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  //Fetched the user object from a given token.
  useEffect(() => {
    const getMe = async () => {
      const userObj = await fetchMe(token);
      setUser(userObj);
    };
    //Only run getMe() if we have a token
    if(token) {
      getMe();
    }
  }, [token]);// Update the user if the token changes

  useEffect(() => {
    const getPosts = async () => {
      const apiPosts = await fetchPosts();
      console.log(apiPosts);
      setPosts(apiPosts);
    }
    getPosts();

  }, []);

  return (
    <div>
      <h1>{user?.username}</h1>
      <Register setToken={setToken} />
      <Posts posts={posts}/>
    </div>
  )
}

export default App