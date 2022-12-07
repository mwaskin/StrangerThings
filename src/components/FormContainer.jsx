import React from "react";
import NewPostForm from "./NewPostForm";
import FormPlaceholder from "./FormPlaceholder";

const FormContainer = ({token, updatePosts}) => {

  return (
    <div className="form-container">
      {token ? <NewPostForm token={token} updatePosts={updatePosts}/> : <FormPlaceholder />}
    </div>
  )
}

export default FormContainer