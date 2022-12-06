import React, { useState, useEffect } from 'react';
import Register from './components/Register'
import { fetchMe } from './api/auth';
import { fetchPosts } from './api/posts';

import './App.css'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  //fetches user object from a given token
  useEffect(() => {
    const getMe = async () => {
      const userObj = await fetchMe(token);
      // console.log(userObj);
      setUser(userObj);
    };
    //only run getMe is we have a token
    if (token) {
      getMe();
    }
  }, [token]);// update the user if the token changes

  useEffect(() => {
    const getPosts = async () => {
      const apiPosts = await fetchPosts();
      setPosts(apiPosts);
      console.log(posts);
    }
    getPosts();

  }, []);

  return (
    <div>
      <h1>{user?.username}</h1>
      <Register setToken={setToken} />
    </div>
  )
}

export default App