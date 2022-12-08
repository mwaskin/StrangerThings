import React from "react";
import Post from "./Post";
import { reversePostSort } from "../helpers";

import './Posts.css';

//Turn post into separate page upon expansion with all details
const Posts = ({ posts, removePost }) => {
  let defaultSort = true;
  let sortDirectionString;
  const displayPosts = posts;
  // set posts in reverse order
  defaultSort ? null : null

  return (
    <>
      {/* need to fix css first.

      <button type="button" onClick={() => {!defaultSort}}>Reverse Sort</button>
      <span>Sorted by {}</span> */}
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
    </>
  )
}

export default Posts