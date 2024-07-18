import Image from "next/image";

const AddPost = () => {
  return (
    <div className="rounded-lg shadow-lg bg-slate-100 mt-9 items-center p-6 gap-0">
      <div className="flex justify-between">
        <div className="relative w-16 h-16 rounded-full">
          <Image
            fill
            src="/pp.jpg"
            alt="pp"
            className="aspect-square object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col w-[70%]">
          <textarea
            placeholder="What's on your mind?"
            className="focus-within:shadow-lg resize-none bg-gray-100 p-4 placeholder:text-sm w-full h-24 rounded-lg outline-none"
            name="post"
            id="post"
            cols={30}
            rows={10}
          />
          <div className="flex gap-4 text-sm tracking-wider text-slate-500 pt-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addimage.png" alt="image" width={20} height={20} />
              <span>Photo</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addVideo.png" alt="image" width={20} height={20} />
              <span>Video</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/poll.png" alt="image" width={20} height={20} />
              <span>Poll</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/events.png" alt="image" width={20} height={20} />
              <span>Event</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[10%] gap-3">
          <span className="cursor-pointer flex items-start text-lg">😉</span>
          <button className="bg-blue-500 text-white p-2 rounded-lg">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
