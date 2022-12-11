import React from "react";

import './styles/AccountButtons.css'

const AccountButtons = ({token, signOut, navToHome, navToRegister, navToSignIn, navToProfile}) => {
  return (
    <div className="account-buttons">
      <button type="button" onClick={navToHome}>Back Home This Way</button>
      {
      token
      ? <div className="logged-in-buttons">
          <button type='button' name="profile" onClick={navToProfile}>Profile</button>
          <button type='button' name="sign-out-button" onClick={signOut}>Sign Out</button>
      </div>
      : <div className="reg-and-sign-in"> 
          <button type="button" onClick={navToRegister}>Register</button>
          <button type="button" onClick={navToSignIn}>Sign In</button>
        </div>
    }</div>
  )
}

export default AccountButtons;