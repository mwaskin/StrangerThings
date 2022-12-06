import React, { useState } from "react";
import { registerUser } from "../api/auth.js";

const Register = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const setToken = props.setToken;

	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();

					try {
						const token = await registerUser(username, password);
						setToken(token);
						localStorage.setItem("token", token);
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
					type="text"
					value={password}
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type="submit" value="Register Here!" />
			</form>
		</div>
	);
};

export default Register;
