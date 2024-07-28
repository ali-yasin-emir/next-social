import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";

const UserMedia = async ({ user }: { user: User }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex h-[340px] flex-col gap-2 rounded-lg bg-slate-100 p-4 shadow-lg">
      <div className="flex h-1/6 items-center justify-between">
        <h1 className="text- text-slate-400">User Media</h1>
        <span className="text-sm text-blue-500">See all</span>
      </div>
      {postsWithMedia.length
        ? postsWithMedia.map((post) => (
            <div
              key={post.id}
              className="flex h-5/6 flex-wrap justify-between gap-[12px]"
            >
              <Image
                src={post.img!}
                alt={post.desc}
                width={72}
                height={120}
                sizes="100%"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          ))
        : "No media found."}
    </div>
  );
};

export default UserMedia;
