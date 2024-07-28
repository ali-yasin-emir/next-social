"use client";

import { switchBlock, switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

const UserInformationInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
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
    switchOptimisticState("follow");

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

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (prevState, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...prevState,
            following: prevState.following && false,
            followingRequestSent:
              !prevState.following && !prevState.followingRequestSent
                ? true
                : false,
          }
        : {
            ...prevState,
            blocked: !prevState.blocked,
          },
  );

  const block = async () => {
    switchOptimisticState("block");

    try {
      await switchBlock(userId);

      setUserState((prevState) => ({
        ...prevState,
        blocked: !prevState.blocked,
      }));
    } catch (error) {
      console.log(error);
      throw new Error("An error occurred while switching block status.");
    }
  };

  return (
    <>
      <form action={follow}>
        <button className="flex w-full items-center justify-center rounded-lg border-0 bg-blue-600 py-2 text-sm text-white outline-none">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
              ? "Friend Request Sent"
              : "Follow"}
        </button>
      </form>
      <form action={block}>
        <div className="flex justify-end">
          <button className="cursor-pointer text-sm text-red-600">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </button>
        </div>
      </form>
    </>
  );
};

export default UserInformationInteraction;
