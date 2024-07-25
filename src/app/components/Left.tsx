import { Suspense } from "react";
import LeftMenu from "./LeftMenu";
import ProfileCard from "./ProfileCard";
import SponsoredAdds from "./SponsoredAdds";

const Left = () => {
  return (
    <div className="hidden w-[20%] flex-col gap-8 md:flex">
      <Suspense fallback="loading...">
        <ProfileCard />
      </Suspense>
      <Suspense fallback="loading...">
        <LeftMenu />
      </Suspense>
      <Suspense fallback="loading...">
        <SponsoredAdds />
      </Suspense>
    </div>
  );
};

export default Left;
