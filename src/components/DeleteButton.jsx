import React from "react";

const DeleteButton = ({ postId, removePost }) => {
  return (
    <button className="delete-button" onClick={removePost(postId)}>Delete Me!</button>
  )
}

export default DeleteButton