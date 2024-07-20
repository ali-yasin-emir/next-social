import Image from "next/image";

const Comments = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="w-[10%] gap-2 self-start rounded-full">
          <Image
            width={48}
            height={48}
            src="/pp2.jpg"
            alt="pp"
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex w-[90%] flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black">Yasin</span>
            <span className="text-xs text-slate-400">4 hours ago</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">
            That&apos;s amazing! 🎉
          </span>
          <div className="flex gap-4 text-sm text-slate-400">
            <Image src="/like.png" alt="like" width={20} height={20} />|
            <span>61 Likes</span>
            <span className="font-semibold text-slate-950">Reply</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="w-[10%] gap-2 self-start rounded-full">
          <Image
            width={48}
            height={48}
            src="/pp2.jpg"
            alt="pp"
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex w-[90%] flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black">Yasin</span>
            <span className="text-xs text-slate-400">4 hours ago</span>
          </div>
          <span className="text-sm font-semibold text-slate-700">
            That&apos;s amazing! 🎉
          </span>
          <div className="flex gap-4 text-sm text-slate-400">
            <Image src="/like.png" alt="like" width={20} height={20} />|
            <span>61 Likes</span>
            <span className="font-semibold text-slate-950">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
