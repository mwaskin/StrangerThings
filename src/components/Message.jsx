import React from "react";

const Message = ({postHead, fromUser, content}) => {
  console.log(postHead)
  return (
    <>
    <h1>The Message</h1> 
    <p>{postHead.title}</p>
    <p>{content}</p>
    </>
  )
}

export default Message;