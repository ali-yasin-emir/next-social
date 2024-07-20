import Image from "next/image";
import AddComment from "./AddComment";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="mt-8 flex h-[1080px] w-full flex-col justify-between gap-4 rounded-lg bg-slate-100 p-6 shadow-lg">
      <div className="flex h-[8%] w-full gap-6">
        <div className="relative h-16 w-16 rounded-full">
          <Image
            fill
            src="/pp2.jpg"
            alt="pp"
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-[2.4px]">
          <span className="font-semibold text-black">Yasin</span>
          <span className="text-xs text-slate-400">1 day ago</span>
        </div>
      </div>
      <div className="relative flex h-[60%] w-full">
        <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-black"></div>
        <Image
          fill
          src="/post3.jpg"
          alt="post"
          className="z-10 rounded-lg object-contain"
        />
      </div>
      <div className="flex h-[12%] w-full">
        <p className="text-justify leading-6">
          Witnessed the incredible Heavy Falcon launch today! 🚀 The power and
          precision of this technology are truly awe-inspiring. Here’s to
          pushing the boundaries of space exploration!
          <br />
          <span className="text-blue-500">
            #SpaceX #FalconHeavy #SpaceLaunch
          </span>
        </p>
      </div>
      <div className="flex h-auto flex-col gap-6">
        <div className="flex items-center justify-between px-2 text-slate-500">
          <div className="flex gap-8">
            <div className="flex items-center justify-between gap-2">
              <Image src="/like.png" alt="like" width={20} height={20} />
              <span className="text-slate-300">|</span>
              <span>61 Likes</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <Image src="/comment.png" alt="comment" width={20} height={20} />
              <span className="text-slate-300">|</span>
              <span>0 Comments</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Image src="/share.png" alt="share" width={20} height={20} />{" "}
            <span className="text-slate-300">|</span>
            <span>Share</span>
          </div>
        </div>
        <AddComment />
        <Comments />
      </div>
    </div>
  );
};

export default Post;
