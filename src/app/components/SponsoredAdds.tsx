import Image from "next/image";

const SponsoredAdds = () => {
  return (
    <div className="flex h-[440px] flex-col justify-between gap-4 rounded-lg bg-slate-100 p-6 shadow-lg">
      <h2 className="text-md font-bold text-slate-400">Sponsored Ads</h2>
      <div className="relative h-1/2 w-full rounded-lg">
        <Image
          fill
          src="/add.jpg"
          alt="add1"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative flex h-1/2 flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-full">
            <Image
              fill
              src="/pp2.jpg"
              alt="pp2"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <h3 className="text-sm text-blue-500">BigChef Lounge</h3>
        </div>
        <p className="text-justify">
          Craving delicious food and a relaxing atmosphere? BigChef Lounge
          offers upscale cuisine in a comfortable setting.
        </p>
        <button className="flex w-full items-center justify-center border-0 bg-slate-200 py-1 text-sm text-slate-500 outline-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SponsoredAdds;
