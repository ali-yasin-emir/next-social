import FriendRequests from "@/app/components/FriendRequests";
import LeftMenu from "@/app/components/LeftMenu";
import MainProfileCard from "@/app/components/MainProfileCard";
import Post from "@/app/components/Post";
import SponsoredAdds from "@/app/components/SponsoredAdds";
import UserInformation from "@/app/components/UserInformation";
import UserMedia from "@/app/components/UserMedia";
import prisma from "@/lib/client";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

const Profile = async ({ params }: { params: { username: string } }) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  // Block user

  let isBlocked;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockedId: currentUserId,
        blockerId: user.id,
      },
    });

    if (res) {
      isBlocked = true;
    }
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <SignedIn>
      <main className="flex w-full justify-between scroll-smooth">
        <div className="hidden w-[20%] flex-col gap-8 md:flex">
          <LeftMenu />
          <SponsoredAdds />
        </div>
        <div className="flex w-[40%] flex-col gap-4">
          <MainProfileCard user={user} />
          <Post />
        </div>
        <div className="flex w-[30%] flex-col gap-12">
          <UserInformation user={user} />
          <UserMedia user={user} />
          <FriendRequests />
          <SponsoredAdds />
        </div>
      </main>
    </SignedIn>
  );
};

export default Profile;
