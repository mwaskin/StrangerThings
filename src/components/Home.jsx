import React from "react";
// import { useForState } from "../initialState";
import Posts from "./Posts";
// import FormContainer from "./FormContainer";

const Home = () => {
	return (
		<div className="main">
			<Posts />
			{/* currentPath={window.location.pathname} ---- ignore this- something i want to try on the side */}
			{/* <FormContainer token={token} posts={posts} setPosts={setPosts} /> */}
		</div>
	);
};

export default Home;
