import axios from 'axios';

async function createPost() {
  const newPost = {
    title: "Axppios",
    body: "Вивчаємо API",
    userId: 1
  };

  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );

  console.log(response.status);
  console.log(response.data);
}

createPost();