import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import SponsoredAdds from "./SponsoredAdds";

const Right = () => {
  return (
    <div className="w-[35%] flex flex-col gap-12">
      <FriendRequests />
      <Birthdays />
      <SponsoredAdds />
    </div>
  );
};

export default Right;
