import React from "react";

export default function PostCard({ data }: { data: any }) {
  const created_at = new Date(data?.posts[0].createdAt);

  const formatDate = (currentDate) => {
    // Get the year, month, and day
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    // Get the hour and minute
    const hour = String(currentDate.getHours()).padStart(2, "0");
    const minute = String(currentDate.getMinutes()).padStart(2, "0");

    // Determine if it's AM or PM
    const ampm = hour >= 12 ? "pm" : "am";

    // Format the date and time
    const formattedDate = `${year}-${month}-${day} at ${
      hour % 12
    }:${minute} ${ampm}`;

    return formattedDate;
  };
  return data.posts.map((post: any) => (
    <div
      key={post.id}
      className="w-[300px] min-h-[300px]  rounded-lg p-4 shadow-md flex flex-col gap-10"
    >
      <h1 className="text-[18px] font-[700] justify-between items-start flex flex-col gap-5">
        <div>{post?.title}</div>
        <div className="text-[14px] text-slate-500">{data.email}</div>
      </h1>
      <p>{post?.content}</p>
      <div>{formatDate(created_at)}</div>
    </div>
  ));
}
