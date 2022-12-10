import React from "react";

const Message = ({ message }) => {
  const {id, post, fromUser, content} = message;
  return(
    <div className='message'>
      <h1>From: {fromUser.username}</h1>
      <h3>Re: {post.title}</h3>
      <h6>ListingID: {post._id}</h6>
      <p>Message: {content}</p>
      <h6>MessageID: {message._id}</h6> 
      {/* why is id not working after destructuring */}
    </div>
  )
}

export default Message;