import React, { useEffect, useState } from "react";

import axios from "axios";

import { Spinner } from "@nextui-org/react";

import PostCard from "./PostCard";

export default function PostCards() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const req = await axios.get("http://localhost:4321/api/users.json");
      const users = await req.data;
      setUsers(users);
      return users;
    };
    getUsers().then(async (res) => {
      if (res[0].posts.length > 0) {
        setLoader(false);
      }
    });
  }, []);
  console.log(users);

  return loader ? (
    <Spinner />
  ) : (
    users.map((user: any) => <PostCard key={user.id} data={user} />)
  );
}
