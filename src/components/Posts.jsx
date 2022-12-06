import React from "react";

import './Posts.css';

//Modularize to individual posts
//Turn post into separate page upon expansion with all details
const Posts = (props) => {
  const posts = props.posts;

  return (
    <div className="all-posts">{
      posts.map(post => {
        return (
          <div key={post._id} className={'post'}>
            <h3>{post.author.username}</h3>
            <div className="post-body">
              <h4>{post.title}</h4>
              <p>{post.description}</p>
            </div>
          </div> 
        )
      })
    }
    </div>
  )
}

export default Posts