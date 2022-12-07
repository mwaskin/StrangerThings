import React from "react";
import DeleteButton from "./DeleteButton";

const Post = ({post, removePost}) => {
  let deliver;
  post.willDeliver ? deliver = 'You betcha' : deliver = 'Nope.'
  let postClasses;
  post.isAuthor ? postClasses = 'post-body is-author' : postClasses = 'post-body'
  //order by date
  return (
    <>
      <h3>{post.title}</h3>
        <div className={postClasses}>
          <h4>Author: {post.author.username}</h4>
          <div className={`${post.active.toString()} isActive`}></div>
          <p>{post.description}</p>
          <p>Location: {post.location ? post.location : null}</p>
          <p>Delivery?: {deliver}</p>
          <p>Price: {post.price}</p>
          <p>Created at: {post.createdAt}</p>
          <p>Updated at: {post.updatedAt}</p>
          {post.isAuthor ? <DeleteButton postId={post._id} removePost={removePost}/> : null}
        </div>
    </>
  )
}

export default Post