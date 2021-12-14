import React from "react";

function NavBarItem({ text, className, callback }) {
	return (
		<li className={className} onClick={callback}>
			{text}
		</li>
	);
}

export default NavBarItem;