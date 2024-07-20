import AddStory from "./AddStory";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="flex justify-center overflow-x-scroll rounded-lg px-[15px]">
      <div className="flex w-full items-center justify-around space-x-10 md:space-x-8">
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
