import { rickAndMortyApi } from "../Utils/constants";

const charactersApi = "character";

const listCharacters = async (page = "") => {
  const response = await fetch(`${rickAndMortyApi}${charactersApi}?${page}`);
  return await response.json();
};

export { listCharacters };
