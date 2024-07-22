import Image from "next/image";

const AddPost = () => {

  return (
    <div className="mt-9 items-center gap-0 rounded-lg bg-slate-100 p-6 shadow-lg">
      <form action="" className="flex justify-between">
        <div className="w-[20%] md:w-[20%]">
          <div className="relative h-16 w-16 rounded-full">
            <Image
              fill
              src="/pp.jpg"
              alt="pp"
              className="aspect-square rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-[65%] flex-col md:w-[70%]">
          <textarea
            placeholder="What's on your mind?"
            className="h-24 w-full resize-none rounded-lg bg-gray-100 p-4 outline-none placeholder:text-sm focus-within:shadow-lg"
            name="desc"
            cols={30}
            rows={10}
          />
          <div className="flex gap-4 pt-4 text-xs tracking-wider text-slate-500 md:text-sm">
            <div className="flex cursor-pointer items-center gap-2">
              <Image src="/addimage.png" alt="image" width={20} height={20} />
              <span>Photo</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <Image src="/addVideo.png" alt="image" width={20} height={20} />
              <span>Video</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <Image src="/poll.png" alt="image" width={20} height={20} />
              <span>Poll</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <Image src="/events.png" alt="image" width={20} height={20} />
              <span>Event</span>
            </div>
          </div>
        </div>
        <div className="flex w-[15%] flex-col gap-3 md:w-[10%]">
          <span className="flex cursor-pointer items-start text-lg">😉</span>
          <button className="md:text-md rounded-lg bg-blue-500 p-2 text-sm text-white">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
