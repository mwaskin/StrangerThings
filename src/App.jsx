import React, { useState, useEffect } from 'react';
import { fetchMe } from './api/auth';
import { fetchPosts } from './api/posts';
import Header from './components/Header';
import Posts from './components/Posts';
import FormContainer from './components/FormContainer';

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

  //separate main out
  return (
    <div className='root-container'>
      <Header user={user} setToken={setToken}/>
      <div className="main">
        <Posts posts={posts}/>
        <FormContainer token={token}/>
      </div>
    </div>
  )
}

export default App