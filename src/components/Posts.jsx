import React, { useState } from "react";
import Post from "./Post";
import { reversePostSort, activePostView } from "../helpers";

import './Posts.css';

//Turn post into separate page upon expansion with all details
const Posts = ({ posts, removePost, showInactive }) => {
  const [defaultSort, setDefaultSort] = useState(true);
  const [displayPosts, setDisplayPosts] = useState([])
  const [sortDirectionString, setSortDirectionString] = useState('chronological');
  
  const initDisplayPosts = () => {
    if(!displayPosts.length) {
      setDisplayPosts([...posts])
    }
  }
  // set posts in reverse order
   const sortPosts = () => {
    if (!defaultSort) {
      setSortDirectionString('chronological')
    } else {
      setSortDirectionString('reverse chronological')
    }
    setDisplayPosts(reversePostSort([...displayPosts]))
    setDefaultSort(!defaultSort)
  }
  
  //Handles other posts mutations: isActive, search query
  //Need to have actively runnning
  const postFilter = () => {
    
    //isActive for profile
    setDisplayPosts(activePostView(displayPosts, showInactive));

    //search queries
  }
  
  initDisplayPosts()

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