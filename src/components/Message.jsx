import React from "react";

const Message = ({postHead, fromUser, content}) => {
  return (
    <>
    <h1>The Message</h1> 
    <p>{postHead.title}</p>
    <p>{content}</p>
    </>
  )
}

export default Message;