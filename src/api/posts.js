const COHORTAPI =
	"https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft";

	//add auth ability
export const fetchPosts = async (token) => {
	try {
		const response = await fetch(`${COHORTAPI}/posts`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
		});
		const {
			data: { posts },
		} = await response.json();
		return posts;
	} catch (err) {
		console.error("Whelp, guess I can't find those posts. Sorry bout that", err)
	}
};

export const submitPost = async (token, title, description, price, location, willDeliver) => {
	try {
		//might not need the variable
		const response = await fetch(`${COHORTAPI}/posts`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				post: {
					title,
					description,
					price,
					location,
					willDeliver
				}
  		})
		})
	} catch (err) {
		console.error("Can't submit that post bud.", err)
	}
}