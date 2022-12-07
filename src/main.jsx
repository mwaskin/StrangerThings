import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//this is the main element on which the site will be rendered
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
