import React from "react";
import { Link } from "react-router-dom";

const MessageButton = () => {
  return (
    <Link to='/send-message'>
      <button className="send-message" >Send Message</button> 
    </Link>
  )
}

export default MessageButton;