import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-full h-[calc(100vh-96px)] items-center justify-center">
      <SignIn />
    </div>
  );
}
