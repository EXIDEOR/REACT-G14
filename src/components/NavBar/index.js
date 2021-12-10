import React, {useState} from "react";

//estilos css
import "./Navbar.css"

export default function NavBar(props) {
	const [active, setActive] = useState(0);
	const itemOne = `item ${active === 1 ? "active" : "inactive"}`;
	const itemTwo = `item ${active === 2 ? "active" : "inactive"}`;

	return (
		<div>
			<ul>
				<li className={itemOne} onClick={() => setActive(1)}>
						FIRST ITEM
				</li>
				<li className={itemTwo} onClick={() => setActive(2)}>
						SECOND ITEM
				</li>
			</ul>
		</div>
	);
}