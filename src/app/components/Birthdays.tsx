import Image from "next/image";

const Birthdays = () => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-lg bg-slate-100 px-6 py-4 shadow-lg">
      <div className="flex flex-col gap-6">
        <h2 className="text-md text-slate-400">Birthdays</h2>
        <div className="flex items-center justify-between">
          <div className="w-[20%] gap-2 rounded-full">
            <Image
              width={48}
              height={48}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-[60%]">
            <span className="text-sm font-bold text-black">Brendan Eich</span>
          </div>
          <div className="w-[20%]">
            <button className="w-fit rounded-lg border-none bg-blue-500 px-2 py-1 text-center text-xs font-light text-white outline-none">
              Celebrate
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[20%] gap-2 self-start rounded-full">
            <Image
              width={48}
              height={48}
              src="/gift.png"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="flex w-[80%] flex-col gap-4">
            <span className="text-semibold text-sm text-black">
              Upcoming Birthdays
            </span>
            <span className="text-sm font-light text-slate-500">
              See other 8 have upcoming birthdays
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
