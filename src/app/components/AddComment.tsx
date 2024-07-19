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
          className="aspect-square object-cover rounded-full"
        />
      </div>
      <div className="w-[80%]">
        <textarea
          name="comment"
          id="comment"
          className="w-full p-4 shadow-md bg-slate-50 rounded-lg resize-none outline-none focus:border-0"
          placeholder="Write a comment..."
        />
      </div>
      <div className="cursor-pointer flex justify-center text-xl w-[10%]">
        😉
      </div>
    </div>
  );
};

export default AddComment;
