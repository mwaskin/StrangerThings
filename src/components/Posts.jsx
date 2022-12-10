import React from "react";
import { useForState } from "../initialState";
import Post from "./Post";

import './Posts.css';

//Modularize to individual posts
//Turn post into separate page upon expansion with all details
const Posts = () => {
  const state = useForState();
  // console.log(state);
  const posts = state.posts;
  
  return (
    <div className="all-posts">{
      posts.map(post => {
        return (
          <div key={post._id} className={'post'}>
            <Post post={post}/>
          </div>
        )
      })
    }
    </div>
  )
}

export default Posts