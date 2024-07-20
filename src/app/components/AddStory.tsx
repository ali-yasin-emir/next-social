import Image from "next/image";

const AddStory = () => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center">
      <div className="relative h-20 w-20 rounded-full">
        <Image
          fill
          src="/pp.jpg"
          alt="story"
          className="aspect-square rounded-full object-cover brightness-[0.6] drop-shadow-xl"
        />
        <div className="absolute left-5 top-5 h-[42px] w-[42px]">
          <Image
            fill
            src="/stories.png"
            alt="story"
            className="z-10 aspect-square rounded-full object-cover brightness-[1.5]"
          />
        </div>
      </div>
      <span className="text-center text-xs">Add a Story</span>
    </div>
  );
};

export default AddStory;
