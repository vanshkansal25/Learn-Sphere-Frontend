"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Bell, User } from "lucide-react";

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
        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-2xl">LearnSphere</h1>
        </Link>

        {/* Center Nav */}
        <div className="flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className={`text-gray-700 hover:text-violet-700 hover:underline  transition ${
                pathname === item.url ? "underline text-violet-700" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-700 hover:text-violet-700 transition">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full text-gray-700 hover:text-violet-700 transition">
            <User className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
