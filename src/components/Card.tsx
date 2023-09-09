import React, { Fragment, useEffect, useState } from "react";

export default function Card({ name }: { name: String }) {
  const [posts, setPostes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const req = await fetch("https://fakestoreapi.com/products/");
      const data = await req.json();

      setPostes(data);
    };

    getData();
  }, []);
  return (
    <div>
      {posts.map((element: any) => (
        <Fragment key={element.id}>
          <div>{element.title}</div>
          <div>{element.price}</div>
          <div>{element.description}</div>
        </Fragment>
      ))}
    </div>
  );
}
