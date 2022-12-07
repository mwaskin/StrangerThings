import React from "react";

const Post = (props) => {
  const post = props.post;

  //order by date
  return (
    <>
      <h3>{post.title}</h3>
        <div className="post-body">
          <h4>{post.author.username}</h4>
          <div className={`${post.active.toString()} isActive`}></div>
          <p>{post.description}</p>
          <p>{post.location ? post.location : null}</p>
          <p>{post.price}</p>
          <p>Created at: {post.createdAt}</p>
          <p>Updated at: {post.updatedAt}</p>
        </div>
    </>
  )
}

export default Post