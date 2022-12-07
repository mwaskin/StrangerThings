import React from "react";
import AccountButtons from "./AccountButtons";

const Header = ({user, signOut, token, navToHome, navToRegister, navToSignIn}) => {
  return (
    <div className="header">
      <h1>Stranger's Things!</h1>
      {token ? <h2>Hey, {user?.username}</h2> : <h2>Howdy Trader</h2>}
      <AccountButtons token={token } signOut={signOut} navToHome={navToHome} navToRegister={navToRegister} navToSignIn={navToSignIn}/>
    </div>
  )
}

export default Header