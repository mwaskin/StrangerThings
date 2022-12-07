import React from "react";
import Posts from "./Posts";
import FormContainer from "./FormContainer";

const Home = ({posts, token}) => {
  return (
    <div className="main">
        <Posts posts={posts}/>
        <FormContainer token={token}/>
    </div>
  )
}

export default Home