import Badge from "../Badge/Badge";

const GistLists = ({ gists, username }) => {
  const getFileType = (filename) => {
    const fileType = filename.split(".").pop();
    return fileType;
  };

  return (
    <div className="mx-10 mt-5">
      <h1 className="text-xl text-center underline">
        The List of Public Gists for <b className="capitalize">{username}</b>
      </h1>
      <>
        {gists.map((gist) => {
          return (
            <div key={gist.id} className="p-2 pb-2 my-5 border-b " data-testid="gistLists">
              <p className="text-lg font-medium capitalize">
                {gist.description
                  ? gist.description
                  : "Description not available"}
              </p>
              <div className="ml-2">
                {Object.keys(gist.files).map((file, idx) => (
                  <Badge
                    badge={getFileType(gist.files[file].filename)}
                    key={idx}
                  />
                ))}
              </div>
              <div className="mt-3 ml-2">
                {gist.forks.map((fork) => (
                  <span key={fork.id} className="cursor-pointer">
                    <a href={fork.html_url} className="flex items-center">
                      <img
                        src={fork.owner.avatar_url}
                        alt=""
                        width="35"
                        height="35"
                        className="rounded-full"
                      />
                    <p className="ml-3">{fork.owner.login}</p>
                    </a>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default GistLists;
