import axios from "axios";

export const getUsersGists = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}/gists`)

  return response
}

export const getUsersForkedGists = async (forkedUrl) => {
  const response = await axios.get(forkedUrl)

  return response.data
}