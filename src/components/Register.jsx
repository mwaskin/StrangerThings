import React, { useState } from "react";
import { registerUser } from "../api/auth.js";

const Register = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const setToken = props.setToken;

<<<<<<< HEAD
	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();

					try {
						const token = await registerUser(username, password);
						setToken(token);
						localStorage.setItem("token", token);
						console.log("localstorage:", localStorage.getItem("token"));
					} catch (err) {
						//
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
=======
  return (
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault();

        try {
          const token = await registerUser(username, password);
          setToken(token);
          localStorage.setItem('token', token);
          console.log('localstorage:', localStorage.getItem('token'))
        } catch (err) {
          console.error('this token shit didnt work', err)
        }
      }}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' value="Register Here!" />
      </form>
    </div>
  )
}
>>>>>>> 7f062c73ebadfdee062ee9784334d64c324de37f

export default Register;
