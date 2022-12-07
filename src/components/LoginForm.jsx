import React, { useState } from "react";
import { logIn } from "../api/auth";

const LoginForm = ({setToken, navToHome, postFlag, setPostFlag}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();

					try {
						const token = await logIn(username, password);
						setToken(token);
						localStorage.setItem("token", token);
						navToHome();
						setPostFlag(postFlag + 1)
					} catch (err) {
						console.error("this token shit didnt work", err);
					}
				}}
			>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					value={username}
					placeholder="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					value={password}
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type="submit" value="Log In" />
			</form>
		</div>
	);
};

export default LoginForm;
