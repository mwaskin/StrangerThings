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

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'alter_title': {
      return {
        ...state,
        title: action.newTitle
      };
    }
    case 'alter_desc': {
      return {
        ...state,
        description: action.newDesc
      };
    }
    case 'alter_price': {
      return {
        ...state,
        price: action.newPrice
      }
    }
    case 'alter_location': {
      return {
        ...state,
        location: action.newLocation
      };
    }
    case 'alter_deliver': {
      return {
        ...state,
        willDeliver: action.newDeliver
      }
    } 
  }
}
