const COHORTAPI =
	"https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft";

export const fetchPosts = async (token) => {
	try {
		const response = await fetch(`${COHORTAPI}/posts`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const {
			data: { posts },
		} = await response.json();
		return posts;
	} catch (err) {}
};
