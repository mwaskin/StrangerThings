import React from "react";
import ReactDOM from "react-dom/client";
import { StateProvider } from "./initialState";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

//this is the main element on which the site will be rendered
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StateProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StateProvider>
	</React.StrictMode>
);
