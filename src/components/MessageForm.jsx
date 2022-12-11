import React, {useState} from "react";
import { useForState } from "../initialState";
import { submitMessage } from "../api/auth";

const MessageForm = () => {
  const state = useForState();
  const [message, setMessage] = useState('');

  return(
    <form className="message-form" onSubmit={async (e) => {
      e.preventDefault();

      try{
        await submitMessage(state.token, message);
        e.target.reset();
      } catch (error){
        console.error("LALALALA I'M NOT LISTENING!!")
      }
    }}>
      <label htmlFor="message-body">Message: </label>
      <textarea name="message-body" id="message-body" cols="50" rows="50" onChange={(e) => setMessage(e.target.value)} />
    </form>
  )
}