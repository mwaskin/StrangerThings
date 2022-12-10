import React from "react";
import { createContext, useContext, useReducer } from "react";

const StateContext = createContext(null);
const StateDispatchContext = createContext(null);

const savedToken = localStorage.getItem("token");
// console.log(savedToken);
const initToken = savedToken ? savedToken : '';
// console.log(initToken);

export function StateProvider ({children}) {

	const [state, dispatch] = useReducer(reducer, {
		token: initToken,
		user: {},
		posts: [],
	});
	// console.log(state);
	// console.log(dispatch);
	return(
		<StateContext.Provider value={state}>
			<StateDispatchContext.Provider value={dispatch}>
				{children}
			</StateDispatchContext.Provider>
		</StateContext.Provider>
	);
}

export function useForState() {
	return useContext(StateContext);
}

export function useStateDispatch() {
	return useContext(StateDispatchContext);
}

function reducer(state, action) {
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
