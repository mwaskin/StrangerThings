import React, { useState } from "react";
import Message from "./Message";

import './styles/UserMessages.css'

const UserMessages = ({user}) => {
  const [messagesOut, setMessagesOut] = useState(user.messages.filter(message => {
    return message.fromUser._id === user._id
  }))
  const [messagesIn, setMessagesIn] = useState(user.messages.filter(message => {
    return message.fromUser._id !== user._id
  }))

  return (
    <section className="user-messages">{
      user.messages && user.messages.length
      ? <div className="messages-container">
          <div className="sent-messages">
          <h2>Your sent Messages</h2>
            {messagesOut.map(message => {
            return (
              <div key={message._id} className="message card">
                <Message postHead={message.post} fromUser={message.fromUser} content={message.content}/>
              </div>
            )
                  })}
          </div>
        
          <div className="received-messages">
          <h2>Your received Messages</h2>
            {messagesIn.map(message => {
            return (
              <div key={message._id} className="message card">
                <Message postHead={message.post} fromUser={message.fromUser} content={message.content}/>
              </div>
            )
                  })}
          </div>
      </div>
      : <div>No messages yet.</div>
    }</section>
  )
}

export default UserMessages;