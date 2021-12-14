import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react"

//components
import UserName from "./components/UserName";

const _users = [
	{
		id: 1,
		firstName: "Auro",
		lastName: "Escalera",
	},
	{
		id: 2,
		firstName: "Jairo",
		lastName: "Roscano",
	},
	{
		id: 3,
		firstName: "Odon",
		lastName: "Balán",
	},
];


function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// await fetch()
		setTimeout(() => {
			const response = _users;
			setUsers(response);
		}, 1000);
	}, []);
	const usersUI = users.map(({id, firstName, lastName}) => (
		<userName key={id} firstName={firstName} lastName={lastName} />
	));

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{usersUI}
			</header>
			<UserName firstName={"Map"} lastName={"Out"}/>
		</div>
	);
}

export default App;