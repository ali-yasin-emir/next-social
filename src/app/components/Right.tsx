import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import SponsoredAdds from "./SponsoredAdds";

const Right = () => {
  return (
    <div className="hidden md:flex w-[30%] flex-col gap-12">
      <FriendRequests />
      <Birthdays />
      <SponsoredAdds />
    </div>
  );
};

export default Right;
