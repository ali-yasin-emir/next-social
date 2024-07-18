import AddPost from "./AddPost";
import Stories from "./Stories";

const Center = () => {
  return (
    <div className="w-[55%] bg-red-400 mx-8">
      <Stories />
      <AddPost />
      <div></div>
    </div>
  );
};

export default Center;
