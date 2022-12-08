import React, { useState } from "react";
import Post from "./Post";
import { reversePostSort } from "../helpers";

import './Posts.css';

//Turn post into separate page upon expansion with all details
const Posts = ({ posts, removePost, showInactive }) => {
  const [defaultSort, setDefaultSort] = useState(true);
  const [displayPosts, setDisplayPosts] = useState([...posts])
  let sortDirectionString = 'chronological';
  
  // set posts in reverse order
   const sortPosts = () => {
    if (!defaultSort) {
      sortDirectionString = 'chronological'
    } else {
      sortDirectionString = 'reverse chronological'
    }
    setDisplayPosts(reversePostSort([...displayPosts]))
    setDefaultSort(!defaultSort)
  }
  
  //Handles all posts mutations: sort, isActive, search query
  const postFilter = () => {
    //sort
    //isActive for profile
    //search queries
  }
  
  //console.log(displayPosts)

  return (
    <div className="sorting-container">
      {/* need to fix css first. */}

      <button type="button" onClick={() => {sortPosts}}>Reverse Sort</button>
      <span>Sorted by {sortDirectionString}</span>
      <div className="all-posts">{
        posts.length 
        ? posts.map(post => {
          return (
            <div key={post._id} className={'post'}>
              <Post post={post} removePost={removePost}/>
            </div> 
          )
        })
        : <h2>No posts yet pal.</h2>
      }
      </div>
    </div>
  )
}

export default Posts