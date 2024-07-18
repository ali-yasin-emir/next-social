import Link from "next/link";
import MobileNav from "./MobileNav";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-slate-200 h-24 flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-[20%]">
        <Link href="/">
          <h1 className="text-xl tracking-wider text-blue-400">REACTUX</h1>
        </Link>
      </div>
      <div className="w-[60%] hidden md:block">
        <ul className="flex items-center space-x-4">
          <Link href="/">
            <li className="flex gap-[4.5px]">
              <span>🏠</span>
              <span>Homepage</span>
            </li>
          </Link>
          <Link href="/friends">
            <li className="flex gap-[4.5px]">
              <span>👩‍👧‍👦</span>
              <span>Friends</span>
            </li>
          </Link>
          <Link href="/stories">
            <li className="flex gap-[4.5px]">
              <span>➕</span>
              <span>Stories</span>
            </li>
          </Link>
          <div className="relative 2xl:ps-24 xl:ps-16 lg:ps-12 lg:block 2xl:w-[500px]">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className="px-2 py-1 w-full bg-transparent outline-none bg-slate-100 rounded-lg"
            />
            <span className="absolute right-2 top-1 cursor-pointer text-lg md:text-md">
              🔎
            </span>
          </div>
        </ul>
      </div>

      <div className="w-[20%] flex justify-end items-center">
        <ul className="space-x-3 hidden md:flex">
          <SignedIn>
            <li className="text-xl">👩‍👧‍👦</li>
            <li className="text-xl">🗯️</li>
            <li className="text-xl">🔔</li>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">Login</Link>
            <span>/</span>
            <Link href="/sign-up">Register</Link>
          </SignedOut>
        </ul>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
