import React, { useState } from "react";
import { registerUser } from "../api/auth.js";

const Register = ({setToken, navToHome}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
      <h2>Register for Our Site Here</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();

        try {
          const token = await registerUser(username, password);
          setToken(token);
          //set localStorage on check box
          localStorage.setItem('token', token);
          navToHome();
        } catch (err) {
          console.error('this token shit didnt work', err)
        }
      }}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          minLength={1}
          required={true}
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={password}
          minLength={4}
          required={true}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' value="Register Here!" />
      </form>
    </div>
  )
}

export default Register;
