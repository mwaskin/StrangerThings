import React from "react";
import NewPostForm from "./NewPostForm";
import FormPlaceholder from "./FormPlaceholder";

const FormContainer = ({token}) => {

  return (
    <div className="form-container">
      {token ? <NewPostForm /> : <FormPlaceholder />}
    </div>
  )
}

export default FormContainer