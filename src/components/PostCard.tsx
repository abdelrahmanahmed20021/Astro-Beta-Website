import React from "react";

export default function PostCard({ data }: { data: any }) {
  const created_at = new Date(data?.createdAt);
  return (
    <div className="w-[50%] rounded-lg p-4 shadow-md flex flex-col gap-10">
      <h1 className="text-[18px] font-[700]">{data?.title}</h1>
      <p>{data?.content}</p>
      <div>
        <p>{created_at.today}</p>
      </div>
    </div>
  );
}
