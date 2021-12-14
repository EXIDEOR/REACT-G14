import React, {useState} from "react";

//components
import NavBarItem from "../NavBarItem";

//estilos css
import "./Navbar.css"

const ULItems = [
	{
		id: 1,
		textt: "Item 1",
	},
	{
		id: 2,
		textt: "Item 1",
	},
	{
		id: 3,
		textt: "Item 1",
	}
]

export default function NavBar(props) {
	const [active, setActive] = useState(0);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");

	let content = ""
	switch (active) {
		case 1:
			content = "◕3◕";
			break;
		case 2:
			content = "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧";
			break;
		case 3:
			content = "(☞ﾟ∀ﾟ)☞";
			break;	
	}

	return (
		<div>
			<ul>
				{ULItems.map((Item) => (
					<NavBarItem 
						key={Item.id}
						text={Item.text}
						className={checkActive(Item.id)}
						callback={() => handleClick(Item.id)}
					/>
				))}
			</ul>
			<div>
				<h1>{content}</h1>
			</div>
		</div>
		);
	}
/*
(el item activo es el 1)
1. El usuario da click en el item 3
2. El click se propaga al componente NavBarItem
3. Dentro de NavBarItem, se ejecuta el callback
4. El callback ejecuta a handleClick (que es el que actualiza al estado)
5. Se ejecuta el setter setActive y se genera un nueva renderización
6. Al momento de renderizar, como el estado active, cambio de valor, el methodo
		checkActive cambia las clases dada la iteración del map
7. Se renderiza
*/





// 	const itemOne = `item ${active === 1 ? "active" : "inactive"}`;
// 	const itemTwo = `item ${active === 2 ? "active" : "inactive"}`;
// 	const itemThree = `item ${active === 3 ? "active" : "inactive"}`;


// 	return (
// 		<div>
// 			<ul>
// 				<li className={itemOne} onClick={() => setActive(1)}>
// 						FIRST ITEM
// 				</li>
// 				<li className={itemTwo} onClick={() => setActive(2)}>
// 						SECOND ITEM
// 				</li>
// 				<li className={itemThree} onClick={() => setActive(3)}>
// 						THIRD ITEM
// 				</li>
// 			</ul>
// 			<div>{checkActiveContent(1) ? <h3> ◕3◕ </h3> : null}</div>
// 			<div>{checkActiveContent(2) ? <h3> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ </h3> : null}</div>
// 			<div>{checkActiveContent(3) ? <h3> (☞ﾟ∀ﾟ)☞ </h3> : null}</div>
			
// 		</div>
// 	);
// }