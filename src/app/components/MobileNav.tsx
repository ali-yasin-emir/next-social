"use client";

import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer flex-col gap-1 md:hidden"
      >
        <li
          className={`h-1 w-6 origin-left bg-blue-500 duration-500 ease-in-out ${
            isOpen && "rotate-45"
          }`}
        ></li>
        <li className={`h-1 w-6 bg-blue-500 ${isOpen && "opacity-0"}`}></li>
        <li
          className={`h-1 w-6 origin-left bg-blue-500 duration-500 ease-in-out ${
            isOpen && "-rotate-45"
          }`}
        ></li>
      </ul>
      {isOpen && (
        <div className="absolute left-0 top-24 z-20 flex h-[calc(100vh-96px)] w-full flex-col items-center justify-center gap-8 overflow-hidden bg-slate-200 px-4 text-lg">
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
