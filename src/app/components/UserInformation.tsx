"use client";

import Image from "next/image";
import { useState } from "react";

const UserInformation = () => {
  const [follow, setFollow] = useState("Follow");
  const [block, setBlock] = useState("Block User");

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-slate-100 p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-slate-400">User Information</h1>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-slate-800">Kim Sun-Woo</h2>
          <span className="text-sm font-bold text-blue-500">@seon_uoo</span>
        </div>
        <p className="text-sm text-slate-800">
          The best and most beautiful things in the world cannot be seen or even
          touched
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm font-light text-slate-400">
        <div className="flex gap-2">
          <Image src="/map.png" alt="location" width={20} height={20} />
          <p className="item-center flex gap-[4.2px]">
            <span>Living in</span>
            <span className="font-bold text-blue-400">Austin, Texas</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Image src="/school.png" alt="school" width={20} height={20} />
          <p className="flex items-center gap-[4.2px]">
            <span>Went to</span>
            <span className="font-bold text-blue-400">
              The University of Texas
            </span>
          </p>
        </div>
        <div className="item-center flex gap-2">
          <Image src="/work.png" alt="location" width={20} height={20} />
          <p className="item-center flex gap-[4.2px]">
            <span>Works at</span>
            <span className="font-bold text-blue-400">Alta Mesa Solar</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/link.png" alt="link" width={20} height={20} />
          <span className="text-sm text-blue-600">ig.com/seon_uoo</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/date.png" alt="date" width={20} height={20} />
          <span className="text-sm text-slate-600">Joined June 17, 2024</span>
        </div>
      </div>
      <button
        onClick={() => {
          if (follow === "Follow") {
            setFollow("Following Request Sent!");
          } else {
            setFollow("Follow");
          }
        }}
        className="flex w-full items-center justify-center rounded-lg border-0 bg-blue-600 py-2 text-sm text-white outline-none"
      >
        {follow}
      </button>
      <div className="flex justify-end">
        <span
          onClick={() => {
            if (block === "Block User") {
              setBlock("Unblock User");
            } else {
              setBlock("Block User");
            }
          }}
          className="cursor-pointer text-sm text-red-600"
        >
          {block}
        </span>
      </div>
    </div>
  );
};

export default UserInformation;
