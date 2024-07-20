import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="relative flex h-64 w-full flex-col justify-between rounded-lg shadow-lg">
      <div className="relative flex h-[40%] rounded-lg">
        <Image
          fill
          src="/leftImage.jpg"
          alt="profile-img"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-[38%] z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[1px] border-white shadow-md">
        <Link href="/profile/123">
          <Image
            fill
            src="/pp.jpg"
            alt="profile-img"
            className="aspect-square rounded-full object-cover"
          />
        </Link>
      </div>
      <div className="flex h-[60%] flex-col items-center justify-end gap-4 py-2 text-sm">
        <h1 className="font-semibold">Kim Sun-Woo</h1>
        <div className="flex gap-4">
          <div className="flex">
            <div>⭐</div>
            <div>⭐</div>
            <div>⭐</div>
          </div>
          <span className="text-slate-400">512 followers</span>
        </div>
        <Link
          href="/profile/123"
          className="w-fit rounded-lg border-none bg-blue-500 p-2 text-white outline-none"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
