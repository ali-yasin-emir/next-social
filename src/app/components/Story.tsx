import Image from "next/image";

const Story = () => {
  return (
    <div className="flex w-1/6 cursor-pointer flex-col items-center justify-center">
      <div className="relative h-20 w-20 flex-shrink-0 rounded-full">
        <Image
          fill
          src="/pp.jpg"
          alt="story"
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <span className="text-center text-xs">Add a Story</span>
    </div>
  );
};

export default Story;
