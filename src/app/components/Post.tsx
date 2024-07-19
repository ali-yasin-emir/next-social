import Image from "next/image";

const Post = () => {
  return (
    <div className="gap-4 p-6 bg-slate-100 shadow-lg rounded-lg w-full h-[840px] mt-8 flex flex-col justify-between">
      <div className="flex w-full gap-6 h-[8%]">
        <div className="relative w-16 h-16 rounded-full">
          <Image
            fill
            src="/pp2.jpg"
            alt="pp"
            className="aspect-square object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-black">Yasin</span>
          <span className="text-sm text-slate-400">1 day ago</span>
        </div>
      </div>
      <div className="flex relative w-full h-[60%]">
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black"></div>
        <Image
          fill
          src="/post3.jpg"
          alt="post"
          className="object-contain rounded-lg z-10"
        />
      </div>
      <div className="flex w-full h-[12%]">
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
      <div className="flex flex-col h-auto gap-6">
        <div className="flex justify-between items-center px-2 text-slate-500">
          <div className="flex gap-8">
            <div className="flex justify-between items-center gap-2">
              <Image src="/like.png" alt="like" width={20} height={20} />
              <span className="text-slate-300">|</span>
              <span>61 Likes</span>
            </div>
            <div className="flex justify-between items-center gap-2">
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
        <div className="flex items-center justify-between">
          <div className="w-[10%]">
            <Image
              width={42}
              height={42}
              src="/pp2.jpg"
              alt="pp"
              className="aspect-square object-cover rounded-full"
            />
          </div>
          <div className="w-[80%]">
            <textarea
              name="comment"
              id="comment"
              className="w-full p-4 shadow-md bg-slate-50 rounded-lg resize-none outline-none focus:border-0"
              placeholder="Write a comment..."
            />
          </div>
          <div className="cursor-pointer flex justify-center text-xl w-[10%]">
            😉
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
