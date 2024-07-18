"use client";

import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col gap-1 md:hidden cursor-pointer"
      >
        <li
          className={`bg-blue-500 w-6 h-1 origin-left ease-in-out duration-500 ${
            isOpen && "rotate-45"
          }`}
        ></li>
        <li className={`bg-blue-500 w-6 h-1 ${isOpen && "opacity-0"}`}></li>
        <li
          className={`bg-blue-500 w-6 h-1 origin-left ease-in-out duration-500 ${
            isOpen && "-rotate-45"
          }`}
        ></li>
      </ul>
      {isOpen && (
        <div className="z-10 absolute left-0 top-24 w-full flex flex-col items-center justify-center px-4 h-[calc(100vh-96px)] gap-8 text-lg bg-slate-200">
          <Link href="/">Home</Link>
          <Link href="/friends">Friends</Link>
          <Link href="/groups">Groups</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/profile">Profile</Link>
        </div>
      )}
    </>
  );
};

export default MobileNav;
