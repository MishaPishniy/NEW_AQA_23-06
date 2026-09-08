import axios from 'axios';

async function getPost() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  console.log(response.status);
  console.log(response.data);
}

getPost();