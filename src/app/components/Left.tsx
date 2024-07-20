import LeftMenu from "./LeftMenu";
import ProfileCard from "./ProfileCard";
import SponsoredAdds from "./SponsoredAdds";

const Left = () => {
  return (
    <div className="hidden w-[20%] flex-col gap-8 md:flex">
      <ProfileCard />
      <LeftMenu />
      <SponsoredAdds />
    </div>
  );
};

export default Left;
