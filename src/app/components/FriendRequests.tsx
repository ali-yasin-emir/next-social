import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="rounded-lg p-4 bg-slate-100 flex flex-col justify-between gap-6 shadow-lg">
      <div className="flex items-center justify-between h-1/6">
        <h1 className="text- text-slate-400">Friend Requests</h1>
        <span className="text-sm text-blue-500">See all</span>
      </div>
      <div className="flex flex-col gap-4 h-5/6">
        <div className="flex items-center justify-between gap-4">
          <div className="rounded-full w-1/6">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square object-cover rounded-full"
            />
          </div>
          <div className="w-4/6">
            <span className="text-black text-sm">Brendan Eich</span>
          </div>
          <div className="flex gap-2 w-1/6">
            <Image src="/accept.png" alt="accept" width={20} height={20} />
            <Image src="/reject.png" alt="reject" width={20} height={20} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="rounded-full w-1/6">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square object-cover rounded-full"
            />
          </div>
          <div className="w-4/6">
            <span className="text-black text-sm">Brendan Eich</span>
          </div>
          <div className="flex gap-2 w-1/6">
            <Image src="/accept.png" alt="accept" width={20} height={20} />
            <Image src="/reject.png" alt="reject" width={20} height={20} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="rounded-full w-1/6">
            <Image
              width={64}
              height={64}
              src="/pp.jpg"
              alt="pp"
              className="aspect-square object-cover rounded-full"
            />
          </div>
          <div className="w-4/6">
            <span className="text-black text-sm">Brendan Eich</span>
          </div>
          <div className="flex gap-2 w-1/6">
            <Image src="/accept.png" alt="accept" width={20} height={20} />
            <Image src="/reject.png" alt="reject" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
