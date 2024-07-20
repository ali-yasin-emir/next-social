import Image from "next/image";
import React from "react";

const AddComment = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="w-[10%]">
        <Image
          width={42}
          height={42}
          src="/pp2.jpg"
          alt="pp"
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <div className="w-[80%]">
        <textarea
          name="comment"
          id="comment"
          className="w-full resize-none rounded-lg bg-slate-50 p-4 shadow-md outline-none focus:border-0"
          placeholder="Write a comment..."
        />
      </div>
      <div className="flex w-[10%] cursor-pointer justify-center text-xl">
        😉
      </div>
    </div>
  );
};

export default AddComment;
