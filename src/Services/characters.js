//paso 4 definir el metodo que necesito para traer los datos de la url
import { rickAndMortyApi } from "../Utils/constants";

const charactersApi = "character";
//metodo para hacer la peticion al servidor de los datos de la url en constants
const listCharacters = async (page = "") => {
  const response = await fetch(`${rickAndMortyApi}${charactersApi}?${page}`);
  //fetch por defecto nos trae un get del servidor se obtiene mediante el response.json()
  return await response.json();
};

export { listCharacters };
