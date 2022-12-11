import React from "react";
import AccountButtons from "./AccountButtons";

import './styles/Header.css'

const Header = ({user, signOut, token, navToHome, navToRegister, navToSignIn, navToProfile}) => {
  return (
    <>
      <div className="header">
        <h1 className="header-title">Stranger's Things!</h1>
        <AccountButtons token={token } signOut={signOut} navToHome={navToHome} navToRegister={navToRegister} navToSignIn={navToSignIn} navToProfile={navToProfile}/>
      </div>
        {token ? <h2>Hey, {user?.username}</h2> : <h2>Howdy Trader</h2>}
    </>
  )
}

export default Header;