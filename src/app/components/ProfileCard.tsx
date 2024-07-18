import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="relative w-full flex flex-col justify-between h-64 rounded-lg shadow-lg">
      <div className="relative h-[45%] flex rounded-lg">
        <Image
          fill
          src="/leftImage.jpg"
          alt="profile-img"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="top-[85px] 2xl:left-28 lg:left-20 md:left-16 z-10 w-14 h-14 rounded-full absolute border-white border-[1px] shadow-md  ">
        <Image
          fill
          src="/pp.jpg"
          alt="profile-img"
          className="object-cover rounded-full aspect-square"
        />
      </div>
      <div className="flex flex-col h-[55%] gap-4 items-center justify-end py-2 text-sm">
        <h1 className="font-semibold">Kim Sun-Woo</h1>
        <div className="flex gap-4">
          <div className="flex">
            <div>⭐</div>
            <div>⭐</div>
            <div>⭐</div>
          </div>
          <span className="text-slate-400">1M followers</span>
        </div>
        <button className="w-fit px-2 py-1 bg-blue-500 text-white outline-none border-none rounded-lg">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
