export default {
  method: "GET",
  path: "/hello",
  async handler() {
    return new Response("Hello, world!");
  },
};
