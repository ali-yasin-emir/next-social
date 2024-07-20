import FriendRequests from "@/app/components/FriendRequests";
import LeftMenu from "@/app/components/LeftMenu";
import MainProfileCard from "@/app/components/MainProfileCard";
import Post from "@/app/components/Post";
import SponsoredAdds from "@/app/components/SponsoredAdds";
import UserInformation from "@/app/components/UserInformation";
import UserMedia from "@/app/components/UserMedia";
import { SignedIn } from "@clerk/nextjs";

const Profile = () => {
  return (
    <SignedIn>
      <main className="flex w-full justify-between scroll-smooth">
        <div className="hidden w-[20%] flex-col gap-8 md:flex">
          <LeftMenu />
          <SponsoredAdds />
        </div>
        <div className="flex w-[40%] flex-col gap-4">
          <MainProfileCard />
          <Post />
        </div>
        <div className="flex w-[30%] flex-col gap-12">
          <UserInformation />
          <UserMedia />
          <FriendRequests />
          <SponsoredAdds />
        </div>
      </main>
    </SignedIn>
  );
};

export default Profile;
