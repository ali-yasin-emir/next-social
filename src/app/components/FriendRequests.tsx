import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="flex h-[272px] flex-col justify-between gap-6 rounded-lg bg-slate-100 p-4 shadow-lg">
      <div className="flex h-1/6 items-center justify-between">
        <h1 className="text- text-slate-400">Friend Requests</h1>
        <span className="text-sm text-blue-500">See all</span>
      </div>
      <div className="flex h-auto flex-col gap-4 overflow-y-scroll pr-12">
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/6 rounded-full">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-4/6">
            <span className="text-sm text-black">Brendan Eich</span>
          </div>
          <div className="flex w-1/6 gap-2">
            <Image
              className="cursor-pointer"
              src="/accept.png"
              alt="accept"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              src="/reject.png"
              alt="reject"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/6 rounded-full">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-4/6">
            <span className="text-sm text-black">Brendan Eich</span>
          </div>
          <div className="flex w-1/6 gap-2">
            <Image
              className="cursor-pointer"
              src="/accept.png"
              alt="accept"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              src="/reject.png"
              alt="reject"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/6 rounded-full">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-4/6">
            <span className="text-sm text-black">Brendan Eich</span>
          </div>
          <div className="flex w-1/6 gap-2">
            <Image
              className="cursor-pointer"
              src="/accept.png"
              alt="accept"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              src="/reject.png"
              alt="reject"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/6 rounded-full">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-4/6">
            <span className="text-sm text-black">Brendan Eich</span>
          </div>
          <div className="flex w-1/6 gap-2">
            <Image
              className="cursor-pointer"
              src="/accept.png"
              alt="accept"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              src="/reject.png"
              alt="reject"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/6 rounded-full">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-4/6">
            <span className="text-sm text-black">Brendan Eich</span>
          </div>
          <div className="flex w-1/6 gap-2">
            <Image
              className="cursor-pointer"
              src="/accept.png"
              alt="accept"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              src="/reject.png"
              alt="reject"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/6 rounded-full">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-4/6">
            <span className="text-sm text-black">Brendan Eich</span>
          </div>
          <div className="flex w-1/6 gap-2">
            <Image
              className="cursor-pointer"
              src="/accept.png"
              alt="accept"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              src="/reject.png"
              alt="reject"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/6 rounded-full">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
          <div className="w-4/6">
            <span className="text-sm text-black">Brendan Eich</span>
          </div>
          <div className="flex w-1/6 gap-2">
            <Image
              className="cursor-pointer"
              src="/accept.png"
              alt="accept"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              src="/reject.png"
              alt="reject"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
