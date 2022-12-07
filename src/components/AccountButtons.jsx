import React from "react";

const AccountButtons = ({token, signOut, navToHome, navToRegister, navToSignIn}) => {
  return (
    <div className="account-buttons">
      <button type="button" onClick={navToHome}>Back Home This Way</button>
      {
      token
      ? <button type='button' name="sign-out-button" onClick={signOut}>Sign Out</button>
      : <div className="reg-and-sign-in"> 
          <button type="button" onClick={navToRegister}>Register</button>
          <button type="button" onClick={navToSignIn}>Sign In</button>
        </div>
    }</div>
  )
}

export default AccountButtons