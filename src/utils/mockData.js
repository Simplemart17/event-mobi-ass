const mockApiData = [
  {
    id: 11,
    forks: [
      {
        id: 1,
        html_url: "html_url",
        owner: {
          login: "Simplemart17",
          avatar_url: "url",
        },
      },
    ],
    files: {
      "gist.io.md": {
        filename: "gist.io.md",
        type: "text/markdown",
        language: "Markdown",
      },
    },
    description: "Testing GIST.IO",
    owner: {
      login: "Simplemart17",
    },
  },
  {
    id: 12,
    forks: [],
    files: {
      "useLocalStorage.js": {
        filename: "useLocalStorage.js",
        type: "application/javascript",
        language: "JavaScript",
      },
    },
    owner: {
      login: "Simplemart17",
    },
  },
  {
    id: 13,
    forks: [],
    files: {
      "deepCopy.js": {
        filename: "deepCopy.js",
        type: "application/javascript",
        language: "JavaScript",
      },
    },
    owner: {
      login: "Simplemart17",
    },
  },
];

export default mockApiData;
