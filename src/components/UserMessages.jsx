import React, { useState } from "react";
import Message from "./Message";

const UserMessages = ({user}) => {
  const [isMessageForm, setIsMessageForm] = useState(false)

  return (
    <section className="user-messages">{
      user.messages && user.messages.length
      ? user.messages.map(message => {
        return (
          isMessageForm ? null //message form here
          :<div key={message._id} className="message">
            <Message postHead={message.post} fromUser={message.fromUser} content={message.content}/>
          </div>
        )
      })
      : <div>No messages yet.</div>
    }</section>
  )
}

export default UserMessages