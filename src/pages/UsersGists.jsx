import { useState } from "react";
import SearchBar from "../component/SearchBar/SearchBar";
import { getUsersGists } from "../services/gists";

const UsersGists = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usersGists, setUsersGists] = useState([]);
  const [gistNotFound, setGistNotFound] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  // validate username to input only string nad number
  const validateUsername = /^[A-Za-z0-9]*$/.test(username)

  const handleSearch = async () => {
    setIsLoading(true)
    if (username.length && validateUsername) {
      const gist = await getUsersGists(username);
      
      if (gist.status === 200) {
        setUsersGists(gist.data)
      } else {
        setGistNotFound("Gist not found")
      }
    }
    setUsername('')
    setIsLoading(false)
  }

  const handleKeyPress = (event) => {
    if (event.code === 'Enter' || event.which === 13) {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2 md:w-1/4 mt-14">
        <SearchBar value={username} onChange={handleChange} handleClick={handleSearch} onKeyPress={handleKeyPress} />
      </div>
    </div>
  );
};

export default UsersGists;
