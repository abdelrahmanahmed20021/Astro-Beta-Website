import axios from "axios";

export const createPostApi = async (title: string, description: string) => {
  const req = await axios.post("http://localhost:4321/api/post.json", {
    title,
    content: description,
    userId: "64fd958adcb3f27014c5b46f",
  });
  const res = await req.data;

  return res;
};
