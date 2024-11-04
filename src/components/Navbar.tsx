"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", name: "Home" },
  { href: "/todos", name: "Todos" },
  { href: "/add-todo", name: "Add todo" },
];

const Navbar = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        tooodooo
      </Link>
      <nav>
        <ul className="flex gap-4 items-center justify-center">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={` ${
                    pathname === link.href
                      ? "text-zinc-900 border-b-2 border-zinc-900"
                      : "text-zinc-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */}

          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
