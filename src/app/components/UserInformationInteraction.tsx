"use client";

import { switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

const UserInformationInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const follow = async () => {
    switchOptimisticFollow("");

    try {
      await switchFollow(userId);
      setUserState((prevState) => ({
        ...prevState,
        following: prevState.following && false,
        followingRequestSent:
          !prevState.following && !prevState.followingRequestSent
            ? true
            : false,
      }));
    } catch (error) {
      console.log(error);
      throw new Error("An error occurred while switching follow status.");
    }
  };

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
    userState,
    (prevState) => ({
      ...prevState,
      following: prevState.following && false,
      followingRequestSent:
        !prevState.following && !prevState.followingRequestSent ? true : false,
    }),
  );

  return (
    <>
      <form action={follow}>
        <button className="flex w-full items-center justify-center rounded-lg border-0 bg-blue-600 py-2 text-sm text-white outline-none">
          {optimisticFollow.following
            ? "Following"
            : optimisticFollow.followingRequestSent
              ? "Friend Request Sent"
              : "Follow"}
        </button>
      </form>
      <form>
        <div className="flex justify-end">
          <span className="cursor-pointer text-sm text-red-600">
            {optimisticFollow.blocked ? "Unblock User" : "Block User"}
          </span>
        </div>
      </form>
    </>
  );
};

export default UserInformationInteraction;
