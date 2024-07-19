import AddStory from "./AddStory";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="bg-slate-100 flex justify-center px-[15px] shadow-lg rounded-lg overflow-x-scroll">
      <div className="space-x-8 w-full flex justify-around items-center">
        <AddStory />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
};

export default Stories;
