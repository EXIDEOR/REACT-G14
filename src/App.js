import "./App.css";
import { useEffect, useState } from "react";

// Components
import Character from "./components/Character";

// Services es el 3er paso despues defeinir los estados
import { listCharacters } from "./Services/characters.js";

//primero definir estado use state y dejarlo como vacio para evitar "undefined"
function App() {
  const [characters, setCharacters] = useState([]);
  //primrea vez, pinta los arrays vacios por ser la etapa de montaje
  const [data, setData] = useState({});
  //
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //paso 5 definimos la funcion asincrona para traer los datos de services/characters,js
    const list = async () => {
      //desestructuramos los datos para traer los elementos que se necesitan, los resultados de los personajes.
      const { results, info } = await listCharacters();
      setCharacters(results);
      //etapa de actualizacion muestra los resultados de los personajes
      setData(info);
      setIsLoading(false);
    };
    list();
  }, []);

  //paso8 preparar un boton para guardar la info de más paginas de personajes
  const handleClick = async (action) => {
    setIsLoading(true);
    let page;
    if (action === "next" && data.next != null) {
      page = data.next.split("?")[1];
    }
    if (action === "prev" && data.prev != null) {
      page = data.prev.split("?")[1];
    }
    const { results, info } = await listCharacters(page);
    setCharacters(results);
    setData(info);
    setIsLoading(false);
  };

  const hasPrevLink = data.prev ? true : false;
  const hasNextLink = data.next ? true : false;

  return (
    <div className="App">
      <div className="fixed-container">
        {hasPrevLink ? (
          <button
            disabled={isLoading}
            onClick={() => handleClick("prev")}
            className="btn"
          >
            Prev
          </button>
        ) : null}
        {hasNextLink ? (
          <button
            disabled={isLoading}
            onClick={() => handleClick("next")}
            className="btn"
          >
            Next
          </button>
        ) : null}
      </div>
      {characters.map(({ id, image, name, species, status }) => (
        //paso 6 traemos la info de los personajes y la desestructuramos con el metodo map. y le colocamos la info que requerimos
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
