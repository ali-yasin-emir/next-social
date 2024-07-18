import Image from "next/image";

const Story = () => {
  return (
    <div className="flex flex-col justify-center items-center w-1/6">
      <div className="relative w-20 h-20 rounded-full flex-shrink-0">
        <Image
          fill
          src="/pp.jpg"
          alt="story"
          className="aspect-square object-cover rounded-full"
        />
      </div>
      <span className="text-center text-xs">Add a Story</span>
    </div>
  );
};

export default Story;
