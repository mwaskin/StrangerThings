import React, { useState, useReducer } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const Post = ({post, userId, removePost, removePostFromProfile}) => {
  const [isEditable, setIsEditable] = useState(false)
  //try rewriting with useReducer, currently this probably can't be updated individually

  function reducer(state, action){
    switch (action.type) {
      case 'alter_title':
        return {
          
        }
    }
  }
  const initReducer = {
    'title': post.title,
    'description': post.description,
    'price': post.price,
    'location': post.location,
    'willDeliver': post.willDeliver
  }

  let deliver;
  post.willDeliver ? deliver = 'You betcha' : deliver = 'Nope.'
  let postClasses;
  post.isAuthor ? postClasses = 'post-body is-author' : postClasses = 'post-body'

  //Accounts for posts from user obj.
  let authorIdMatch = false;
  if (userId) {
    if (userId === post.author){
      authorIdMatch = true;
    }
  }
  
  return (
    <div>{ isEditable // time to make another giant form... I should generalize NewPostForm, but I won't.
      ? <form onSubmit={(e) => {
        e.preventDefault();
        setIsEditable(false);
        console.log(postEditObj)
        //call updatePost
      }}>
        <label htmlFor="post-title">Title: </label>
        <input type="text" required={true} placeholder="Your title..." value={initReducer.title} onChange={(e) => setPostEditObj(postEditObj.title = e.target.value)}/>

        <label htmlFor="post-body">Description: </label>
        <textarea name="description" required={true} id="post-description" cols="30" rows="10" value={initReducer.description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <label htmlFor="post-price">Price: </label>
        <input type="text" required={true} placeholder="$$$" value={initReducer.price} onChange={(e) => setPrice(e.target.value)}/>

        <label htmlFor="post-location">Location &#40;optional&#41;: </label>
        <input type="text" value={initReducer.location} onChange={(e) => setLocation(e.target.value)}/>

        {/* Not checking box */}
        <label htmlFor="post-will-deliver">Will you deliver?</label>
        <input type="checkbox" value={initReducer.willDeliver} onChange={() => setWillDeliver(!willDeliver)}/>
        <input type="submit" value='click me!'/>
        </form>
      : <>
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
          {post.isAuthor || authorIdMatch
          ? <DeleteButton postId={post._id} removePost={removePost} removePostFromProfile={removePostFromProfile}/>
          : null}
          {post.isAuthor || authorIdMatch
          ? <EditButton postId={post._id} post={post} setIsEditable={setIsEditable}/>
          : null}
        </div>
      </>
    }</div>
  )
}

export default Post