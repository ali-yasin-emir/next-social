import AddPost from "./AddPost";
import Post from "./Post";
import Stories from "./Stories";

const Center = () => {
  return (
    <div className="mx-16 w-[40%]">
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
