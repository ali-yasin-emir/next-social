import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "My Posts", icon: "accept.png", link: "" },
  { name: "Activity", icon: "activity.png", link: "" },
  { name: "Marketplace", icon: "market.png", link: "" },
  { name: "Events", icon: "events.png", link: "" },
  { name: "Albums", icon: "albums.png", link: "" },
  { name: "Videos", icon: "videos.png", link: "" },
  { name: "News", icon: "news.png", link: "" },
  { name: "Courses", icon: "courses.png", link: "" },
  { name: "Lists", icon: "lists.png", link: "" },
  { name: "Settings", icon: "settings.png", link: "" },
];

const LeftMenu = () => {
  return (
    <div className="flex flex-col rounded-lg p-4 px-8 shadow-lg">
      <div className="flex flex-col gap-[20px]">
        {menuItems.map((item, index) => (
          <Link
            className="flex items-center gap-4"
            href={"/" + item.link}
            key={index}
          >
            <Image
              width={20}
              height={20}
              src={"/" + item.icon}
              alt={`${item.name} icon`}
            />
            <span className="text-md">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftMenu;
