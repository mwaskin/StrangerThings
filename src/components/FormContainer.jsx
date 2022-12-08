import React from "react";
import NewPostForm from "./NewPostForm";
import FormPlaceholder from "./FormPlaceholder";

const FormContainer = ({token, posts, setPosts}) => {

  return (
    <div className="form-container">
      {token ? <NewPostForm token={token} posts={posts }setPosts={setPosts}/> : <FormPlaceholder />}
    </div>
  )
}

export default FormContainer