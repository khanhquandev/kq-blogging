import Image from "next/image";
import Link from "next/link";
import React from "react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];
const Navbar = () => {
  return (
    <div className="flex justify-between mb-10 ">
      <div className="flex gap-16">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={45} height={0} />
        </Link>
        <div className="flex gap-16 items-center text-lg font-medium">
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search post..."
          className="border pr-9 pl-3 py-3 rounded-lg "
        ></input>

        <a
          href="/signUp"
          className="px-6 py-3 text-white bg-[#00B4AA] rounded-lg ml-5"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
