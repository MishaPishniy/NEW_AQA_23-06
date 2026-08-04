const axios = require("axios");

async function getPost(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return response;
}

module.exports = { getPost };
