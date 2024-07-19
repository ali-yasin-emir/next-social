import Image from "next/image";

const SponsoredAdds = () => {
  return (
    <div className="h-[440px] bg-slate-100 flex flex-col gap-4 p-6 justify-between rounded-lg shadow-lg">
      <h2 className="text-md text-slate-400 font-bold">Sponsored Ads</h2>
      <div className="relative w-full h-1/2 rounded-lg">
        <Image
          fill
          
          src="/add.jpg"
          alt="add1"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col relative h-1/2 gap-2">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full">
            <Image
              fill
              src="/pp2.jpg"
              alt="pp2"
              className="rounded-full object-cover aspect-square"
            />
          </div>
          <h3 className="text-sm text-blue-500">BigChef Lounge</h3>
        </div>
        <p className="text-justify">
          Craving delicious food and a relaxing atmosphere? BigChef Lounge
          offers upscale cuisine in a comfortable setting.
        </p>
        <button className="py-1 outline-none border-0 bg-slate-200 text-slate-500 text-sm w-full flex justify-center items-center">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SponsoredAdds;
