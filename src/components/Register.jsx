import React, { useState } from "react";
import { useStateDispatch } from "../initialState";
import { registerUser } from "../api/auth.js";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useStateDispatch();

	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();

					try {
						const token = await registerUser(username, password);
						dispatch({type: 'setToken', payload: token});
						// localStorage.setItem("token", token); //add remember me
					} catch (err) {
						console.error("this token shit didnt work", err);
					}
				}}
			>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					value={username}
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="text"
					value={password}
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				{/* <label htmlFor="confirm-password">Confirm Password: </label>
				<input
					type="password"
					value={password}
					placeholder="Confirm Password"
					onChange={(e) => setPassword(e.target.value)}
				/> */}
				<input type="submit" value="Register Here!" />
			</form>
		</div>
	);
};

export default Register;
