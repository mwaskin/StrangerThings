// import { createContext } from "react";

export const reducer = (state, action) => {
	switch (action.type) {
		case "setToken": 
			{return { ...state, token: action.payload};}
		case "setUser":
			{return { ...state, user: action.payload};}
		case "setPosts":
			{return { ...state, posts: action.payload };}
		default:
			{return state;}
	}
};

// export const StateContext = createContext(null);
// export const StateDispatchContext = createContext(null);