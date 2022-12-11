import React, {useState} from "react";
import { submitMessage } from "../api/posts";

import './styles/MessageForm.css'

const MessageForm = ({ token, post, isPost, setIsPost }) => {
  const [messageBody, setMessageBody] = useState('');

  return(
    <form className="message-form" onSubmit={async (e) => {
      e.preventDefault();

      try{
        await submitMessage(token, post._id, messageBody);
        e.target.reset();
        setIsPost(!isPost)
      } catch (error){
        console.error("LALALALA I'M NOT LISTENING!!")
      }
    }}>
      <div className="post-message-container">
        <p>To: {post.author.username}</p>
        <p>Re: {post.title}</p>
        <label htmlFor="message-body">Message: </label>
        <textarea name="message-body" id="message-body" cols="50" rows="5" onChange={(e) => setMessageBody(e.target.value)} />
      </div>
      <button type="submit">Send message</button>
      <button onClick={() => {setIsPost(!isPost)}}>Back to post</button>
    </form>
  )
}

export default MessageForm