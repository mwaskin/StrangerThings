import React, { useState } from "react";
import { registerUser } from "../api/auth";

const Register = (props) => {
	const setToken = props.setToken;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<form
				onSubmit={async (event) => {
					try {
						event.preventDefault();
						const token = await registerUser(username, password);
						// console.log(token);
						setToken(token);
						localStorage.setItem("token", token);
						// console.log(localStorage.getItem("token"));
					} catch (error) {
						console.log(error);
					}
				}}
			>
				<label htmlFor="username">Username :</label>
				<input
					value={username}
					type="text"
					placeholder="Username"
					onChange={(event) => setUsername(event.target.value)}
				></input>
				<label htmlFor="password">Password :</label>
				<input
					value={password}
					type="password"
					placeholder="Password"
					onChange={(event) => setPassword(event.target.value)}
				></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Register;
