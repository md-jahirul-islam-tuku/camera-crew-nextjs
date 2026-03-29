"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg font-semibold ${isActive ? "text-primary border-b-2 border-blue-600" : "text-blue-200"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
