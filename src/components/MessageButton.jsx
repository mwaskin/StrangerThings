import React from "react";

const MessageButton = ({ isPost, setIsPost }) => {
  return (
      <button className="send-message" onClick={() => {setIsPost(!isPost)}}>Send Message</button> 
  )
}

export default MessageButton;