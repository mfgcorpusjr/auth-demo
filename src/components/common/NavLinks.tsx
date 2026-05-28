"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navLinks = [{ href: "/dashboard", label: "Dashboard" }];

export default function NavLinks() {
  const pathname = usePathname();

  return navLinks.map((navLink) => (
    <Link
      key={navLink.href}
      href={navLink.href}
      className={cn("text-sm font-medium hover:underline underline-offset-4", {
        underline: navLink.href === pathname,
      })}
    >
      {navLink.label}
    </Link>
  ));
}
