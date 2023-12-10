import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block px-3 hover:text-stone-400">
      {title}
    </Link>
  );
};

export default NavLink;
