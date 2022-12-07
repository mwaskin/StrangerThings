import React from "react";
import Post from "./Post";

import './Posts.css';

//Modularize to individual posts
//Turn post into separate page upon expansion with all details
const Posts = (props) => {
  const posts = props.posts;

  return (
    <div className="all-posts">{
      posts.length 
      ? posts.map(post => {
        return (
          <div key={post._id} className={'post'}>
            <Post post={post}/>
          </div> 
        )
      })
      : <h2>No posts yet pal.</h2>
    }
    </div>
  )
}

export default Posts