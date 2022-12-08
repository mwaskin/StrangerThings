import React, { useState, useEffect } from "react";
import Post from "./Post";
import { reversePostSort, activePostView } from "../helpers";

import './Posts.css';

//Turn post into separate page upon expansion with all details
const Posts = ({ posts, userId, removePost, showInactive }) => {
  const [defaultSort, setDefaultSort] = useState(true);
  const [displayPosts, setDisplayPosts] = useState(posts)
  const [sortDirectionString, setSortDirectionString] = useState('oldest first');

  useEffect(() => {
    //need to account for reversed posts somewhere, react is not happy with resetting the posts here. Think it would need to be in a separate function
    setDisplayPosts(activePostView(posts, displayPosts, showInactive));
  }, [showInactive])

  // set posts in reverse order
   const sortPosts = () => {
    if (!defaultSort) {
      setSortDirectionString('oldest first')
    } else {
      setSortDirectionString('newest first')
    }
    setDisplayPosts(reversePostSort(displayPosts))
    setDefaultSort(!defaultSort)
  }
  
  //Handles other posts mutations: isActive, search query
  //Need to have actively runnning
  const postFilter = () => {
    
    //isActive for profile
    

    //search queries
  }
  
  return (
    <div className="sorting-container">
      {/* need to fix css first. */}

      <button type="button" onClick={() => {sortPosts()}}>Reverse Sort</button>
      <span>Sorted by {sortDirectionString}</span>
      <div className="all-posts">{
        displayPosts.length 
        ? displayPosts.map(post => {
          return (
            <div key={post._id} className={'post'}>
              <Post post={post} removePost={removePost} userId={userId}/>
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