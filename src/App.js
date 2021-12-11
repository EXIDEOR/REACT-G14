import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react"

const _users = [
	{
		id: 1,
		firstName: "Selene",
		lastName: "Chavez",
	},
	{
		id: 2,
		firstName: "Omar",
		lastName: "Mijangos",
	},
	{
		id: 3,
		firstName: "Luis",
		lastName: "Balán",
	},
	{
		id: 4,
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
		}, 3000);
	}, []);

	console.log(users);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				{users.map((user) => {
					const _firstName = user.firstName.toUpperCase();
					return (
						<div key={user.id}>
							<h1>
								{_firstName} {user.lastName}
							</h1>
						</div>
					);
				})}

				{users.map((user) => (
					<div key={user.id}>
						<h1>
							{user.firstName} {user.lastName}
						</h1>
					</div>
				))}
			</header>
		</div>
	);
}

export default App;