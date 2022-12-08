export const removePostFromState = (posts, removedPostId) => {
  return posts.filter(post => {
    return post._id !== removedPostId;
  })
}

export const reversePostSort = (posts) => {
  return posts.reverse()
}

export const activePostView = (defaultPosts, posts, showInactive) => {
  if (showInactive){
    console.log(showInactive)
    return defaultPosts
  } else {
    console.log(showInactive)
    return posts.filter(post => {
      return post.active
    })
  }
}