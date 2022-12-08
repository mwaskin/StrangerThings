import React from "react";

const DeleteButton = ({ postId, removePost, removePostFromProfile }) => {
  return (
    <button type='button' className="delete-button" onClick={() => {
      removePost(postId);
      removePostFromProfile(postId);
    }}>Delete Me!</button>
  )
}

export default DeleteButton