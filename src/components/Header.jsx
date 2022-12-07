import React from "react";
import Register from "./Register";

const Header = ({user, setToken}) => {
  return (
    <div className="header">
      <h1>Stranger's Things!</h1>
      <h2>Hey, {user?.username}</h2>
      {/* Change to register or login button container. ---Register---  ---Sign in--- // ---Sign Out --- */} 
      <Register setToken={setToken} />
    </div>
  )
}

export default Header