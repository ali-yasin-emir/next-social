import LeftMenu from "./LeftMenu";
import ProfileCard from "./ProfileCard";

const Left = () => {
  return (
    <div className="w-[20%] flex flex-col">
      <ProfileCard />
      <LeftMenu />
    </div>
  );
};

export default Left;
