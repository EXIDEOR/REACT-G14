import "./App.css";
import { useEffect, useState } from "react";

// Components
import Character from "./components/Character";

// Services
import { listCharacters } from "./Services/characters.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const list = async () => {
      const { results, info } = await listCharacters();
      setCharacters(results);
      setData(info);
    };
    list();
  }, []);

  console.log(data);

  return (
    <div className="App">
      {characters.map(({ id, image, name, species, status }) => (
        <Character
          key={id}
          image={image}
          name={name}
          species={species}
          status={status}
        />
      ))}
    </div>
  );
}

export default App;
