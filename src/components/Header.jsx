import React from "react";
import AccountButtons from "./AccountButtons";
// will need to import AccountButtons component

const Header = ({token}) => {
	return (
		<header>
			<h1>Stranger's Things</h1>
      <AccountButtons token={token}/>
		</header>
	);
};

export default Header;
