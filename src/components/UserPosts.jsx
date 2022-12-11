import React, { useState } from "react";
import Posts from "./Posts";

const UserPosts = ({user, removePost}) => {
  const [showInactive, setShowInactive] = useState(false)

  const toggleInactivePosts = () => {
    setShowInactive(!showInactive);
  }
  
  return (
    <>
      <label htmlFor="inactive-posts">Show inactive posts: </label>
      <input type="checkbox" onChange={toggleInactivePosts}/>
      <section className="user-posts">{
        user.posts
        ? <Posts user={user} posts={user.posts} userId={user._id} removePost={removePost} showInactive={showInactive}/>
        : null
      }</section>
    </>
  )
}

export default UserPosts