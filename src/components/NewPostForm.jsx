import React, { useState } from "react";
import { submitPost } from "../api/posts";

import './NewPostForm.css'

const NewPostForm = ({token, updatePosts}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [willDeliver, setWillDeliver] = useState(false)

  return (
    <aside className="post-form-container">
      <h2>Make a new post</h2>
      <form className="post-form" onSubmit={(e) => {
          e.preventDefault();

          try { //WARN: submitPost will still run if another func in block throws an error. This leads to double posting, be careful when modifying.
            submitPost(token, title, description, price, location, willDeliver)
            updatePosts(); //calls useEffects to fetch posts
            e.target.reset(); 
          } catch (err) {
            console.error("That post ain't happenin bud.", err)
          }
      }}>
        <label htmlFor="post-title">Title: </label>
        <input type="text" placeholder="Your title..." onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="post-body">Description: </label>
        <textarea name="description" id="post-description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>

        <label htmlFor="post-price">Price: </label>
        <input type="text" placeholder="$$$" onChange={(e) => setPrice(e.target.value)}/>

        <label htmlFor="post-location">Location &#40;optional&#41;: </label>
        <input type="text" onChange={(e) => setLocation(e.target.value)}/>

        <label htmlFor="post-will-deliver">Will you deliver?</label>
        <input type="checkbox" onChange={() => setWillDeliver(!willDeliver)}/>

        <input type="submit" value='Post it!'/>
      </form>
    </aside>
  )
}

export default NewPostForm