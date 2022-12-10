import React from "react";
import { useForState } from "../initialState";
import Message from "./Message";

const Messages = () => {
  const state = useForState();
  const messages = state.user.messages;
  return(
    <div className='all-messages'>{
      messages.map(message => {
        return (
          <div key={message._id} className={'message'}>
            <Message message={message} />
          </div>
        )
      })
    }

    </div>
  )
}

export default Messages;