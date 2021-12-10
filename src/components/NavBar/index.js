import React, {useState} from "react";

//estilos css
import "./Navbar.css"

export default function NavBar(props) {
	const [active, setActive] = useState(0);
	const checkActiveContent = (itemID) => (active === itemID ? true : false);

	const itemOne = `item ${active === 1 ? "active" : "inactive"}`;
	const itemTwo = `item ${active === 2 ? "active" : "inactive"}`;
	const itemThree = `item ${active === 3 ? "active" : "inactive"}`;


	return (
		<div>
			<ul>
				<li className={itemOne} onClick={() => setActive(1)}>
						FIRST ITEM
				</li>
				<li className={itemTwo} onClick={() => setActive(2)}>
						SECOND ITEM
				</li>
				<li className={itemThree} onClick={() => setActive(3)}>
						THIRD ITEM
				</li>
			</ul>
			<div>{checkActiveContent(1) ? <h3> ◕3◕ </h3> : null}</div>
			<div>{checkActiveContent(2) ? <h3> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ </h3> : null}</div>
			<div>{checkActiveContent(3) ? <h3> (☞ﾟ∀ﾟ)☞ </h3> : null}</div>
			
		</div>
	);
}