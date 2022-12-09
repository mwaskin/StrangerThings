import React from "react";
import Posts from "./Posts";
// import FormContainer from "./FormContainer";
import { reducer } from "../initialState";

const Home = ({ posts, token}) => {
	return (
		<div className="main">
			<Posts posts={posts} />
			{/* <FormContainer token={token} posts={posts} setPosts={setPosts} /> */}
		</div>
	);
};

export default Home;
