import React, { useState, useReducer } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import MessageButton from "./MessageButton";
import MessageForm from "./MessageForm";
import { postReducer } from "../helpers";

const Post = ({user, token, post, userId, removePost, removePostFromProfile, editPost}) => {
  const initReducer = {
    'title': post.title,
    'description': post.description,
    'price': post.price,
    'location': post.location,
    'willDeliver': post.willDeliver
  }
  const [isEditable, setIsEditable] = useState(false)
  const [isChecked, setIsChecked] = useState(initReducer.willDeliver)
  const [isPost, setIsPost] = useState(true)

  const [postState, dispatch] = useReducer(postReducer, initReducer);

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case 'post-title': {
        dispatch({
          type: 'alter_title',
          newTitle: e.target.value
        })
        break;
      }
      case 'post-description': {
        dispatch({
          type: 'alter_desc',
          newDesc: e.target.value
        })
        break;
      }
      case 'post-price': {
        dispatch({
          type: 'alter_price',
          newPrice: e.target.value
        })
        break;
      }
      case 'post-location': {
        dispatch({
          type: 'alter_location',
          newLocation: e.target.value
        })
        break;
      }
      case "post-will-deliver": {
        let deliverBool = postState.willDeliver
        deliverBool = !deliverBool
        dispatch({
          type: 'alter_deliver',
          newDeliver: deliverBool
        })
        break;
      }
    }
  }

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
    // should probably move to a separate component, rendering the post from state isn't necessary since patch returns the new post. Overwrite post prop.
    isPost
    ? <div>{ isEditable // time to make another giant form... I should generalize NewPostForm, but I won't.
      ? <form className="edit-form" onSubmit={(e) => {
        e.preventDefault();
        removePostFromProfile(post._id)
        editPost(post._id, postState);
        setIsEditable(false);
      }}>
        <label htmlFor="post-title">Title: </label>
        <input type="text" required={true} id="post-title" placeholder="Your title..." value={postState.title} onChange={(e) => handleInputChange(e)}/>

        <label htmlFor="post-body">Description: </label>
        <textarea name="description" required={true} id="post-description" cols="30" rows="10" value={postState.description} onChange={(e) => handleInputChange(e)}></textarea>

        <label htmlFor="post-price">Price: </label>
        <input type="text" required={true} id="post-price" placeholder="$$$" value={postState.price} onChange={(e) => handleInputChange(e)}/>

        <label htmlFor="post-location">Location &#40;optional&#41;: </label>
        <input type="text" id="post-location" value={postState.location} onChange={(e) => handleInputChange(e)}/>

        <label htmlFor="post-will-deliver">Will you deliver?</label>
        <input type="checkbox" autoComplete='off' id="post-will-deliver" checked={isChecked} onChange={(e) => {handleInputChange(e); setIsChecked(!isChecked)}}/>
        <input type="submit" value='click me!'/>
        </form>
      : 
      <>
        <h3>{postState.title}</h3>
        <div className={postClasses}>{
          post.author.username 
          ? <h4>Author: {post.author.username}</h4>
          : null
        }{
        user
        ?<div className="active-container">
            <span>active: </span>
            <div className={`${post.active.toString()} isActive`}></div>
          </div>
        : null
        }
          <p>{postState.description}</p>
          <p>Location: {postState.location}</p>
          <p>Delivery?: {postState.willDeliver ? 'You betcha' : 'Nope.'}</p>
          <p>Price: {postState.price}</p>
          <p>Updated at: {post.updatedAt}</p>
          {post.isAuthor || authorIdMatch
          ? <>
              <DeleteButton postId={post._id} removePost={removePost} removePostFromProfile={removePostFromProfile}/>
              <EditButton postId={post._id} post={post} setIsEditable={setIsEditable}/>
            </>
          : null}
          {!(post.isAuthor || authorIdMatch) && token
          ? <>
              <MessageButton post={post} isPost={isPost} setIsPost={setIsPost}/>
            </>
          : null}
        </div>
      </>
    }</div>
    : <MessageForm token={token} post={post} isPost={isPost} setIsPost={setIsPost}/>
  )
}

export default Post