const COHORTAPI =
	"https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft";

// adds a user to the API based on the username and pw input in the form in Register component
export const registerUser = async (username, password) => {
	try {
		const response = await fetch(`${COHORTAPI}/users/register`, {
			method: "POST", //to add a data object to the API
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: {
					username,
					password,
				},
			}),
		});

		const {
			data: { token },
		} = await response.json();
		return token;
	} catch (err) {
		//
	}
};

// GETs a logged-in user data from the API based on a valid user token passed
export const fetchMe = async (token) => {
	try {
		const response = await fetch(`${COHORTAPI}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const { data } = await response.json();
		return data;
	} catch (err) {
		//
	}
};

export const logIn = async (username, password) => {
	try {
		const response = await fetch(`${COHORTAPI}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: {
					username,
					password,
				},
			}),
		});
		const {
			data: { token },
		} = await response.json();
		return token;
	} catch (error) {
		console.error(
			"This username and password combination does not exist. Please try again or click Register to create a new account.", error
		);
	}
};
