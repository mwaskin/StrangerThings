import React, { useState, useEffect } from "react";
import "./App.css";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});

	useEffect(() => {
		const getMe = async () => {
			const data = await fetchMe(token);
			setUser(data);
		};
		if (token) {
			getMe();
		}
	}, [token]);

	return (
		<div className="App">
			<h1>{user?.username}</h1>
			<Register setToken={setToken} />
		</div>
	);
}

export default App;
