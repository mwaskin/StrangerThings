const COHORTAPI = 'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft'

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${COHORTAPI}/posts`)
        const { data: { posts } } = await response.json();
        console.log(posts);
    } catch (err) { }

} 