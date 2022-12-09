import React from "react";

const EditButton = ({ setIsEditable }) => {
  

  return (
    <button type='button' className="edit-button" onClick={() => {
      setIsEditable(true)
    }}>Edit Post</button>
  )
}

export default EditButton