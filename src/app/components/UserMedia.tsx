import { User } from "@prisma/client";
import Image from "next/image";

const UserMedia = ({ user }: { user: User }) => {
  return (
    <div className="flex h-fit flex-col gap-4 rounded-lg bg-slate-100 p-4 shadow-lg">
      <div className="flex h-1/6 items-center justify-between">
        <h1 className="text- text-slate-400">User Media</h1>
        <span className="text-sm text-blue-500">See all</span>
      </div>
      <div className="flex flex-wrap justify-between gap-[12px]">
        <Image
          src="/m1.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
        <Image
          src="/m2.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
        <Image
          src="/m3.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
        <Image
          src="/m4.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
        <Image
          src="/m5.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
        <Image
          src="/m6.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
        <Image
          src="/m7.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
        <Image
          src="/m8.jpg"
          alt="user"
          width={72}
          height={84}
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default UserMedia;
