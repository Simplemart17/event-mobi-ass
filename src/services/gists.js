import axios from "axios";

export const getUsersGists = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}/gists`)

  return response
}