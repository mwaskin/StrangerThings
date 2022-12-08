import React, { useState } from "react";
import Post from "./Post";
import Message from "./Message";

import './Profile.css'

const Profile = ({user, removePost}) => {
  
  return (
    <>
      <header>{user.username}'s Profile</header>
      <div className="profile-sections">
        <section className="user-posts">{
          user.posts
          ? user.posts.map(post => {
            return (
              <div key={post._id} className={'post'}>
                <Post post={post}  removePost={removePost} />
              </div>
            )
          })
          : null
        }</section>
        <section className="user-messages">{
          user.messages && user.messages.length
          ? user.messages.map(message => {
            return (
              <div key={message._id} className="message">
                <Message postHead={message.post} fromUser={message.fromUser} content={message.content}/>
              </div>
            )
          })
          : <div>No messages yet.</div>
        }</section>
      </div>
    </>
  )
}

export default Profile