import React from "react";
import { NavLink } from "react-router-dom";

const AccountButtons = ({token, signOut}) => {
  return (
    <div>
      <NavLink to='/' className={'nav-home'}>Home</NavLink>
      {token ? (
        <div>
          <NavLink to='/profile/posts'>Profile</NavLink>
          <NavLink to='/'>Sign Out</NavLink>
        </div>
      ) : (
        <div>
          <NavLink to='/sign-in'>Sign In</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </div>
      )}
    </div>
  );
};

export default AccountButtons;