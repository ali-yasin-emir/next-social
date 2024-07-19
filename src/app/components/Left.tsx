import LeftMenu from "./LeftMenu";
import ProfileCard from "./ProfileCard";

const Left = () => {
  return (
    <div className="w-[25%] hidden flex-col md:flex">
      <ProfileCard />
      <LeftMenu />
    </div>
  );
};

export default Left;
