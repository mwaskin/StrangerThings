# Stranger's Things Starter Repo

## Instructions

1. Fork then Clone this repo
2. `npm install` and `npm run dev` to start the server
3. Use the git remote workflow with your partner

### Reference the workshop for instructions!


#### TODO
- [x] Set up router to work with register and sign in buttons
- [x] Functional account buttons, pages, and routing
- [x] Implement post functionality. Needs: Title, descp., price, location(optional), willDeliever(bool, optional, default: false)
- [ ] Form validation for registration - bad usernames and passwords (regex) 
- [ ] Add remember me to reg and sign in
- [ ] Style header to stick to the top and add some content to the account pages
- [ ] Ask about weird given css: logo, animation, read-the-docs

- [ ] Update posts on: (try to limit API calls and update local state instead)
- [x] New post 
- [x] Deletion 
- [ ] Edit

- [x] Add additional functionality for isAuthor:true posts.
- [x] FIXME: isAuthor isn't working for multiple sign ins.
- [ ] Could modify posting to reduce arguments by using an obj and stringify
- [x] Decide on sort for posts - chronological or reverse...
- [x] Add delete for user posts
- [ ] ^doesn't reload page
- [ ] Add messaging functionality 
- [ ] Add search form:
- [ ] JSX
- [ ] Filter Algo (try to filter for title first, then add users and descriptions)

- [ ] Convert to react UI framework:
- [ ] Convert new post to flyout activated by button
- [ ] Notifications for:
- [ ] Successful or unsuccessful reg and login, logout, post, edit, or delete

Adam Wed Night:
- [x] Add remember me
- [x] Rework profile to use the user object's posts and messages
- [x] Write func to change post state without API call:
- [x] Pass setPosts to functions that don't change user state but do change posts
- [ ] Add reverse sort func
- [ ] Add modify button and func
- [ ] Add search

- [ ] Swap state on buttons to avoid extra components - JC
- [x] How to delete posts from user and not just posts endpoint:
- [x] Set option to hide/show active posts
- [x] Modify profile to use posts with user posts
- [x] Add posts and messages tabs to profile
- [ ] Make posts default for profile
- [ ] Add detail view to posts. Likely make new component to wrap post and add extra func
- [x] merge branch
- [x] Update user.posts as well as posts in state on state change