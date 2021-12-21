import { BASE_URL } from "../Utils/constants";
const USER_PATH = "users.json";

const createUser = async (data) => {
  const response = await fetch(`${BASE_URL}${USER_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export { createUser };
