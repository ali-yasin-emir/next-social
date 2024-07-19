import AddPost from "./AddPost";
import Post from "./Post";
import Stories from "./Stories";

const Center = () => {
  return (
    <div className="w-[40%] bg-red-400 mx-16">
      <Stories />
      <AddPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Center;
