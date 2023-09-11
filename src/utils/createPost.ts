import axios from "axios";

export const createPostApi = async (title: string, description: string) => {
  const req = await axios.post("http://localhost:4321/api/post.json", {
    title,
    content: description,
    userId: "64ff6a15e8ea0aad9a7eda83",
  });
  const res = await req.data;

  return res;
};
