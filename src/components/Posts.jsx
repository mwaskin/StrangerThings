import React, { useState, useEffect } from "react";
import Post from "./Post";
import { reversePostSort, activePostView } from "../helpers";

import './styles/Posts.css';

//Turn post into separate page upon expansion with all details
const Posts = ({ user, token, posts, userId, removePost, showInactive, editPost }) => {
  const [defaultSort, setDefaultSort] = useState(true);
  const [displayPosts, setDisplayPosts] = useState(posts)
  const [searchedPosts, setSearchedPosts] = useState([])
  const [sortDirectionString, setSortDirectionString] = useState('oldest first');
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    //need to account for reversed posts somewhere, react is not happy with resetting the posts here. Think it would need to be in a separate function
    setDisplayPosts(activePostView(posts, displayPosts, showInactive));
  }, [showInactive])

  useEffect(() => {
    setDisplayPosts(posts)
  }, [posts])

  // set posts in reverse order
   const sortPosts = () => {
    if (!defaultSort) {
      setSortDirectionString('oldest first')
    } else {
      setSortDirectionString('newest first')
    }
    setDisplayPosts(reversePostSort(displayPosts))
    setDefaultSort(!defaultSort)
  }

  const queryMatches = (post, query) => {
    const lowerQuery = query.toLowerCase();
    const postTitle = post.title.toLowerCase();
    const postDesc = post.description.toLowerCase();
    const postPrice = post.price.toLowerCase();
    const postAuthor = post.author.username.toLowerCase();

    /* broken fix later
    let postLocation;
    post.location 
    ? postLocation = post.Location.toLowerCase()
    : null;
    else if (postLocation.includes(lowerQuery)){
      return true;
    }  */

    if (postTitle.includes(lowerQuery)){
      return true;
    } else if (postDesc.includes(lowerQuery)){
      return true;
    } else if (postPrice.includes(lowerQuery)){
      return true;
    } else if (postAuthor.includes(lowerQuery)){
      return true;
    } else {
      return false;
    }
  }

  const returnSearch = () => {
    //try incorporating searchedPosts, too tired for it here.
    //or pull from posts too.
    setDisplayPosts([...displayPosts].filter(post => {
      if (searchQuery === ''){
        return true
      }
      return queryMatches(post, searchQuery)
    }))
  }

  const removePostFromProfile = (postId) => {
    setDisplayPosts([...displayPosts].filter(post => {
      return post._id !== postId; 
    }))
  }
  
  return (
    <div className="sorting-container">
      <div className="filters-container">
        <label htmlFor="post-search">Find a post: </label>
        {/* Doesn't work for deleting characters, reset button is a shim */}
        <input type='search' id='post-search' onChange={(e) => {setSearchQuery(e.target.value); returnSearch()}}/>
        <button type="button" onClick={() => {setDisplayPosts(posts)}}>Reset Search</button>
        <button type="button" onClick={() => {sortPosts()}}>Reverse Sort</button>
        <span>Sorted by {sortDirectionString}</span>
      </div>
      <div className="all-posts">{
        displayPosts.length 
        ? displayPosts.map(post => {
          return (
            <div key={post._id} className={'post card'}>
              <Post user={user} token={token} post={post} removePost={removePost} userId={userId} removePostFromProfile={removePostFromProfile} editPost={editPost}/>
            </div> 
          )
        })
        : <h2>No posts yet pal.</h2>
      }
      </div>
    </div>
  )
}

export default Posts