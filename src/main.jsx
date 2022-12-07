import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App";
import "./index.css";

//this is the main element on which the site will be rendered
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
