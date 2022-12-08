import React from "react";

const UserMessages = ({user}) => {
  return (
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
  )
}

export default UserMessages