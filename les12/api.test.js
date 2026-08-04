const { getPost } = require("./app");

describe("Перевірка Posts API", () => {
  test("GET /posts/1 повертає правильний пост", async () => {
    const response = await getPost(1);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.userId).toBe(1);
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
  });

   test("GET /posts/200 повертає неправильний пост", async () => {
    const response = await getPost(200);

    expect(response.status).toBe(404);
    expect(response.data.id).toBe(1);
    expect(response.data.userId).toBe(1);
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
  });
});
