import React from "react";
import Posts from "./Posts";
import FormContainer from "./FormContainer";

const Home = ({posts, token, updatePosts}) => {
  return (
    <div className="main">
        <Posts posts={posts}/>
        <FormContainer token={token} updatePosts={updatePosts}/>
    </div>
  )
}

export default Home