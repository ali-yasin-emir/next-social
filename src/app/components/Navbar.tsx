import Link from "next/link";
import MobileNav from "./MobileNav";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex h-24 items-center justify-between bg-slate-200 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-[20%]">
        <Link href="/">
          <h1 className="text-xl tracking-wider text-blue-400">REACTUX</h1>
        </Link>
      </div>
      <div className="hidden w-[60%] md:block">
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
          <div className="relative lg:block lg:ps-12 xl:ps-16 2xl:w-[500px] 2xl:ps-24">
            <input
              type="search"
              
              name=""
              id=""
              placeholder="Search..."
              className="w-full rounded-lg bg-slate-100 px-2 py-1 outline-none"
            />
            <span className="md:text-md absolute right-2 top-1 flex cursor-pointer text-lg">
              <Image src="/search.png" alt="search" width={20} height={20} />
            </span>
          </div>
        </ul>
      </div>

      <div className="flex w-[20%] items-center justify-end">
        <ul className="hidden space-x-3 md:flex">
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
