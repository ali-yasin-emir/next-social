import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import UserInformationInteraction from "./UserInformationInteraction";

const UserInformation = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { userId: currentUserId } = auth();

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockedId: user.id,
        blockerId: currentUserId,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);
  } else {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-slate-100 p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-slate-400">User Information</h1>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold capitalize text-slate-800">
            {user.name && user.surname
              ? user.name + "" + user.surname
              : user.username}
          </h2>
          <span className="text-sm font-bold text-blue-500">
            @{user.username}
          </span>
        </div>
        {user.description && (
          <p className="text-sm text-slate-800">{user.description}</p>
        )}
      </div>
      <div className="flex flex-col gap-4 text-sm font-light text-slate-400">
        <div className="flex gap-2">
          <Image src="/map.png" alt="location" width={20} height={20} />
          {user.city && (
            <p className="item-center flex gap-[4.2px]">
              <span>Living in</span>
              <span className="font-bold text-blue-400">{user.city}</span>
            </p>
          )}
        </div>
        {user.school && (
          <div className="flex gap-2">
            <Image src="/school.png" alt="school" width={20} height={20} />
            <p className="flex items-center gap-[4.2px]">
              <span>Went to</span>
              <span className="font-bold text-blue-400">{user.school}</span>
            </p>
          </div>
        )}
        {user.work && (
          <div className="item-center flex gap-2">
            <Image src="/work.png" alt="location" width={20} height={20} />
            <p className="item-center flex gap-[4.2px]">
              <span>Works at</span>
              <span className="font-bold text-blue-400">{user.work}</span>
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        {user.website && (
          <div className="flex items-center gap-2">
            <Image src="/link.png" alt="link" width={20} height={20} />
            <Link href={user.website} className="text-sm text-blue-600">
              {user.website}
            </Link>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Image src="/date.png" alt="date" width={20} height={20} />
          <span className="text-sm text-slate-600">Joined {formattedDate}</span>
        </div>
      </div>
      <UserInformationInteraction
        userId={user.id}
        currentUserId={currentUserId}
        isUserBlocked={isUserBlocked}
        isFollowing={isFollowing}
        isFollowingSent={isFollowingSent}
      />
    </div>
  );
};

export default UserInformation;
