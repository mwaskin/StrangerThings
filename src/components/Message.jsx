import React from "react";

const Message = ({postHead, fromUser, content}) => {
  //Can't check who we sent the message too yet.
  //Write a getPostById func
  return (
    <div className="message-card">
    <h4>{postHead.title}</h4> 
    <p>From: {fromUser.username}</p>
    <p>{content}</p>
    </div>
  )
}

export default Message;