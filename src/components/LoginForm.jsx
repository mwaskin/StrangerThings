import React, { useState } from "react";
import { logIn } from "../api/auth";

const LoginForm = ({setToken, navToHome, updatePosts}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	return (
		<div>
			<h2>Log in Here!</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();

					try {
						const token = await logIn(username, password);
						setToken(token);
						rememberMe ? localStorage.setItem("token", token) : null;
						navToHome();
						updatePosts();
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
				<label htmlFor="remember">Remember Me</label>
        <input type="checkbox" onChange={() => { setRememberMe(!rememberMe) }} />
			</form>
		</div>
	);
};

export default LoginForm;
