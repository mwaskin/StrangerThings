import React from "react";
import Posts from "./Posts";
import FormContainer from "./FormContainer";

const Home = ({posts, token, setPosts, removePost, editPost}) => {
  return (
    <div className="main">
        <Posts posts={posts} removePost={removePost} editPost={editPost}/>
        <FormContainer token={token} posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default Home