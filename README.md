# Stranger's Things Starter Repo

## Instructions

1. Fork then Clone this repo
2. `npm install` and `npm run dev` to start the server
3. Use the git remote workflow with your partner

### Reference the workshop for instructions!


#### TODO
Rewrite me!
- [x] Set up router to work with register and sign in buttons
- [x] Functional account buttons, pages, and routing
- [x] Implement post functionality. Needs: Title, descp., price, location(optional), willDeliever(bool, optional, default: false)
- [ ] Form validation for registration - bad usernames and passwords (regex) 
- [x] Add remember me to reg and sign in
- [ ] Style header to stick to the top and add some content to the account pages
- [x] Ask about weird given css: logo, animation, read-the-docs

- [x] Update posts on: (try to limit API calls and update local state instead)
- [x] New post 
- [x] Deletion 
- [x] Edit

- [x] Add additional functionality for isAuthor:true posts.
- [x] FIXME: isAuthor isn't working for multiple sign ins.
- [ ] Could modify posting to reduce arguments by using an obj and stringify
- [ ] ^Requires refactor to useReducer
- [x] Decide on sort for posts - chronological or reverse...
- [x] Add delete for user posts
- [x] ^doesn't reload page
- [ ] Add messaging functionality 
- [x] Add search form:
- [x] JSX
- [x] Filter Algo (try to filter for title first, then add users and descriptions)

- [ ] Convert to react UI framework:
- [ ] Convert new post to flyout activated by button
- [ ] Notifications for:
- [ ] Successful or unsuccessful reg and login, logout, post, edit, or delete

Adam Wed Night:
- [x] Add remember me
- [x] Rework profile to use the user object's posts and messages
- [x] Write func to change post state without API call:
- [x] Pass setPosts to functions that don't change user state but do change posts
- [x] Add reverse sort func
- [x] Add modify button and func
- [x] Add search

- [ ] Swap state on buttons to avoid extra components - JC
- [x] How to delete posts from user and not just posts endpoint:
- [x] Set option to hide/show active posts
- [x] Modify profile to use posts with user posts
- [x] Add posts and messages tabs to profile
- [x] Make posts default for profile
- [x] Get routing to work properly (profile/my_posts instead of profile/profile/my_posts)
- [ ] Add detail view to posts. Likely make new component to wrap post and add extra func
- [x] merge branch
- [x] Update user.posts as well as posts in state on state change

- [ ] Optimize components:
- [ ] Could merge register and sign in to one component

Adam Thurs Night:
- [x] Fix Routing ~
- [x] Finish edit button
- [ ] Add navigate function that links to id of post
- [ ] Post as its own page / modal via details or link
- [ ] Rework file structure
- [x] How to swap post paras for form inputs (post converter)
- [x] FIXME: not pulling posts on refresh or login OR ON NEW POST FUCK
- [ ] potential bug: setting user obj in local storage
- [ ] if rememberMe: false, clear localStorage on page exit
- [ ] update to matthew's navLinks
- [ ] rewrite sort to use updated at instead of just reversing
- [ ] Change post buttons to navlinks or the like and route to component