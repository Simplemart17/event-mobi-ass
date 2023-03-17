import { useState } from "react";
import SearchBar from "../component/SearchBar/SearchBar";
import { getUsersGists, getUsersForkedGists } from "../services/gists";
import GistLists from "../component/Gists/GistLists";

const UsersGists = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usersGists, setUsersGists] = useState([]);
  const [gistNotFound, setGistNotFound] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
    setGistNotFound("");
  };

  // validate username to input only string nad number
  const validateUsername = /^[A-Za-z0-9]*$/.test(username);

  const handleSearch = async () => {
    setIsLoading(true);
    if (username.length && validateUsername) {
      const gist = await getUsersGists(username);

      if (gist.status === 200) {
        const results = await Promise.all(
          gist.data.map(async (data) => {
            // fetch users forked gists
            const resp = await getUsersForkedGists(data.forks_url);

            // get the last three forked gists for the user
            return { ...data, forks: resp.slice(0, 3) };
          })
        );

        if (results.length > 0) {
          setUsersGists(results);
        } else {
          setGistNotFound("No public gist found for ");
        }

      } else {
        setGistNotFound("No public gist found for ");
      }
    }
    setIsLoading(false);
    setUser(username);
    setUsername("");
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter" || event.which === 13) {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-10 text-2xl font-bold">Enter a username and press enter or click the search icon</p>
      <div className="w-1/2 mt-5 md:w-1/4">
        <SearchBar
          value={username}
          onChange={handleChange}
          handleClick={handleSearch}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="px-10">
        {isLoading && <p>Searching...</p>}
        {gistNotFound.length ? (
          <p className="mt-5">
            {gistNotFound} {user}
          </p>
        ) : (
          ""
        )}
        {usersGists.length ? (
          <GistLists username={user} gists={usersGists} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UsersGists;
