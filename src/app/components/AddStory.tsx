import Image from "next/image";

const AddStory = () => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center">
      <div className="relative w-20 h-20 rounded-full flex-shrink-0">
        <Image
          fill
          src="/pp.jpg"
          alt="story"
          className="aspect-square object-cover rounded-full"
        />
        <div className="w-[42px] h-[42px] absolute top-5 left-5">
          <Image
            fill
            src="/stories.png"
            alt="story"
            className="z-10 aspect-square object-cover rounded-full"
          />
        </div>
      </div>
      <span className="text-center text-xs">Add a Story</span>
    </div>
  );
};

export default AddStory;
