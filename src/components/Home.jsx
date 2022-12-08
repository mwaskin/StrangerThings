import React from "react";
import Posts from "./Posts";
import FormContainer from "./FormContainer";

const Home = ({posts, token, setPosts, removePost}) => {
  return (
    <div className="main">
        <Posts posts={posts} removePost={removePost}/>
        <FormContainer token={token} posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default Home