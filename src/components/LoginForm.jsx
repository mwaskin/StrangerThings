import React, { useState } from "react";
import { useStateDispatch } from "../initialState";
import { logIn } from "../api/auth";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const dispatch = useStateDispatch();

	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();

					try {
						const token = await logIn(username, password);
						dispatch({type: 'setToken', payload: token});
						rememberMe ? localStorage.setItem('token', token) : null;
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
				<input
					type="checkbox"
					onChange={() => {
						setRememberMe(!rememberMe);
					}}
				/>
			</form>
		</div>
	);
};

export default LoginForm;
