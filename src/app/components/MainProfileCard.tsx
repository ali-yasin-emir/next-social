import Image from "next/image";

const MainProfileCard = () => {
  return (
    <div className="relative flex h-[520px] flex-col justify-between rounded-lg">
      <div className="relative h-1/2">
        <Image
          fill
          src="/post4.jpg"
          alt="cover-img"
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white">
        <Image
          fill
          src="/pp.jpg"
          alt="profile-img"
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex h-1/2 flex-col items-center justify-center gap-8 rounded-b-lg shadow-lg">
        <h2 className="text-xl font-semibold text-black">Kim Sun-Woo</h2>
        <div className="flex w-full items-center justify-evenly px-8">
          <div className="flex flex-col items-center gap-[4.2px] text-sm font-semibold">
            <span className="text-[20px] font-bold text-slate-400">146</span>
            <span className="text-[15px] text-slate-900">Posts</span>
          </div>
          <div className="flex flex-col items-center gap-[4.2px] text-sm font-semibold">
            <span className="text-[20px] font-bold text-slate-400">512</span>
            <span className="text-[15px] text-slate-900">Followers</span>
          </div>
          <div className="flex flex-col items-center gap-[4.2px] text-sm font-semibold">
            <span className="text-[20px] font-bold text-slate-400">578</span>
            <span className="text-[15px] text-slate-900">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfileCard;
