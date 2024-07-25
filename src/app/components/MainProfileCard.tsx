import Image from "next/image";

const MainProfileCard = async ({ user }: { user: any }) => {
  return (
    <div className="relative flex h-[520px] flex-col justify-between rounded-lg">
      <div className="relative h-1/2">
        <Image
          fill
          src={user.cover || "/noCover.png"}
          alt="cover-img"
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white">
        <Image
          fill
          src={user.avatar || "/noAvatar.png"}
          alt="profile-img"
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex h-1/2 flex-col items-center justify-center gap-8 rounded-b-lg shadow-lg">
        <h2 className="text-xl font-semibold text-black">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </h2>
        <div className="flex w-full items-center justify-evenly px-8">
          <div className="flex flex-col items-center gap-[4.2px] text-sm font-semibold">
            {user._count.posts && (
              <span className="text-[20px] font-bold text-slate-400">
                {user._count.posts}
              </span>
            )}
            <span className="text-[15px] text-slate-900">Posts</span>
          </div>
          <div className="flex flex-col items-center gap-[4.2px] text-sm font-semibold">
            {user._count.followers && (
              <span className="text-[20px] font-bold text-slate-400">
                {user._count.followers}
              </span>
            )}
            <span className="text-[15px] text-slate-900">Followers</span>
          </div>
          <div className="flex flex-col items-center gap-[4.2px] text-sm font-semibold">
            {user._count.followings && (
              <span className="text-[20px] font-bold text-slate-400">
                {user._count.followings}
              </span>
            )}
            <span className="text-[15px] text-slate-900">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfileCard;
