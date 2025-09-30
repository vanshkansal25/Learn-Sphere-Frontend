"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Courses", url: "/courses" },
  { label: "About", url: "/about" },
  { label: "FAQ", url: "/faq" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl drop-shadow-sm">LearnSphere</h1>
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className={`text-gray-700 hover:text-neutral-900 hover:underline transition ${
                pathname === item.url ? "underline text-neutral-900" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
