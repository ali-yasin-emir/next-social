import { SignedIn } from "@clerk/nextjs";
import AddPost from "./components/AddPost";
import Left from "./components/Left";
import Post from "./components/Post";
import Right from "./components/Right";
import Stories from "./components/Stories";

const Homepage = () => {
  return (
    <SignedIn>
      <div className="flex w-full justify-between">
        <Left />
        <div className="flex w-full flex-col md:w-[40%]">
          <Stories />
          <AddPost />
          <Post />
        </div>
        <Right />
      </div>
    </SignedIn>
  );
};

export default Homepage;
