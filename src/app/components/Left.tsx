import LeftMenu from "./LeftMenu";
import ProfileCard from "./ProfileCard";
import SponsoredAdds from "./SponsoredAdds";

const Left = () => {
  return (
    <div className="w-[25%] hidden flex-col md:flex gap-8">
      <ProfileCard />
      <LeftMenu />
      <SponsoredAdds />
    </div>
  );
};

export default Left;
