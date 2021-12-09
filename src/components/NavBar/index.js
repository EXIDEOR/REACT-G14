import React from "react";

export default function NavBar(props) {
	return (
		<div>
			<ul>
				<li>
					<button onClick={props.onClick}>
						FIRST ITEM
					</button>
				</li>
				<li>
				<button onClick={props.onClick}>
						SECOND ITEM
					</button>
				</li>
			</ul>
		</div>
	);
}