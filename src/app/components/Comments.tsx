import Image from "next/image";

const Comments = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="rounded-full w-[10%] gap-2 self-start">
          <Image
            width={48}
            height={48}
            src="/pp2.jpg"
            alt="pp"
            className="aspect-square object-cover rounded-full"
          />
        </div>
        <div className="w-[90%] flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span className="text-black font-bold">Yasin</span>
            <span className="text-xs text-slate-400">4 hours ago</span>
          </div>
          <span className="text-slate-700 font-semibold   text-sm">
            That&apos;s amazing! 🎉
          </span>
          <div className="text-sm text-slate-400 flex gap-4">
            <Image src="/like.png" alt="like" width={20} height={20} />|
            <span>61 Likes</span>
            <span className="text-slate-950 font-semibold">Reply</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="rounded-full w-[10%] gap-2 self-start">
          <Image
            width={48}
            height={48}
            src="/pp2.jpg"
            alt="pp"
            className="aspect-square object-cover rounded-full"
          />
        </div>
        <div className="w-[90%] flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span className="text-black font-bold">Yasin</span>
            <span className="text-xs text-slate-400">4 hours ago</span>
          </div>
          <span className="text-slate-700 font-semibold   text-sm">
            That&apos;s amazing! 🎉
          </span>
          <div className="text-sm text-slate-400 flex gap-4">
            <Image src="/like.png" alt="like" width={20} height={20} />|
            <span>61 Likes</span>
            <span className="text-slate-950 font-semibold">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
