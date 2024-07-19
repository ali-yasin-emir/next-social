import Image from "next/image";

const Birthdays = () => {
  return (
    <div className="rounded-lg px-6 py-4 bg-slate-100 flex flex-col justify-between gap-4 shadow-lg">
      <div className="flex flex-col gap-6">
        <h2 className="text-md text-slate-400">Birthdays</h2>
        <div className="flex items-center justify-between">
          <div className="rounded-full w-[20%] gap-2">
            <Image
              width={48}
              height={48}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square object-cover rounded-full"
            />
          </div>
          <div className="w-[60%]">
            <span className="text-black text-sm font-bold">Brendan Eich</span>
          </div>
          <div className="w-[20%]">
            <button className="w-fit text-center text-xs font-light px-2 py-1 bg-blue-500 text-white outline-none border-none rounded-lg">
              Celebrate
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="rounded-full w-[20%] gap-2 self-start">
            <Image
              width={48}
              height={48}
              src="/gift.png"
              alt="pp"
              className="aspect-square object-cover rounded-full"
            />
          </div>
          <div className="w-[80%] flex flex-col gap-4">
            <span className="text-black text-sm text-semibold">
              Upcoming Birthdays
            </span>
            <span className="text-slate-500 font-light   text-sm">
              See other 8 have upcoming birthdays
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
