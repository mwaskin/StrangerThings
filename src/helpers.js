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
    return defaultPosts
  } else {
    return posts.filter(post => {
      return post.active
    })
  }
}