import React from "react";

const Post = ({post}) => {
  let deliver;
  post.willDeliver ? deliver = 'You betcha' : deliver = 'Nope.'
  //order by date
  return (
    <>
      <h3>{post.title}</h3>
        <div className="post-body">
          <h4>Author: {post.author.username}</h4>
          <div className={`${post.active.toString()} isActive`}></div>
          <p>{post.description}</p>
          <p>Location: {post.location ? post.location : null}</p>
          <p>Delivery?: {deliver}</p>
          <p>Price: {post.price}</p>
          <p>Created at: {post.createdAt}</p>
          <p>Updated at: {post.updatedAt}</p>
        </div>
    </>
  )
}

export default Post