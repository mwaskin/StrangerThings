import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";

import "./App.css";

const App = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});

	useEffect(() => {
		const getMe = async () => {
			const data = await fetchMe(token);
			console.log(data);
			setUser(data);
		};
		if (token) {
			getMe();
		}
	}, [token]);

	return (
		<div>
			<h1>{user?.username}</h1>
			<Register setToken={setToken} />
		</div>
	);
};

export default App;
