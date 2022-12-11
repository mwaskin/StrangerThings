import React from "react";

const Message = ({id, postObj, fromUser, content}) => {
	console.log(fromUser.username);
  
  return (
  <div>message
    {/* <h1>From: {fromUser.username}</h1>
    <h3>Re: {postObj.title}</h3>
    <h6>ListingID: {postObj.id}</h6>
    <p>Message: {content}</p> */}
  </div>
  );

};

export default Message;
