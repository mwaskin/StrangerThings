import React from "react";

const NewPostForm = () => {
  return (
    <aside className="post-form">
      <h2>Make a new post</h2>
      <label htmlFor="post-title">Title: </label>
      <input type="text" placeholder="Your title..."/>
      <div>
        <label htmlFor="post-body">Description: </label>
        <textarea name="description" id="post-description" cols="30" rows="10"></textarea>
      </div>

    </aside>
  )
}

export default NewPostForm