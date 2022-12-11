import React, { useState } from "react";
import { registerUser } from "../api/auth.js";

const Register = ({setToken, navToHome}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

	return (
		<div>
      <h2>Register for Our Site Here</h2>
			<form 
        className="auth-form"
				onSubmit={async (e) => {
					e.preventDefault();

        try {
          const token = await registerUser(username, password);
          setToken(token);
          //set localStorage on check box
          rememberMe ? localStorage.setItem('token', token) : null;
          navToHome();
        } catch (err) {
          console.error('this token shit didnt work', err)
        }
      }}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            minLength={1}
            required={true}
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            minLength={4}
            required={true}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type='submit' value="Register Here!" />
        <label htmlFor="remember">Remember Me</label>
        <input type="checkbox" onChange={() => { setRememberMe(!rememberMe) }} />
      </form>
    </div>
  )
}

export default Register;
