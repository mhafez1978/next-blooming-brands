"use client";
import React from "react";
import { usePathname } from "next/navigation";

const menu = [
  { id: 1, name: "home", desc: "", url: "/" },
  { id: 2, name: "about", desc: "", url: "#about" },
  { id: 3, name: "services", desc: "", url: "#services" },
  { id: 4, name: "latest news", desc: "", url: "/latest-news" },
  { id: 5, name: "contact", desc: "", url: "/contact" },
];

const DestopMenu = () => {
  const path = usePathname();

  return (
    <ul className="flex flex-row h-[64px] justify-center items-center gap-4 text-white dark:text-black dark:bg-slate-300 text-[14px] uppercase">
      {menu.map((page) => (
        <li key={page.id}>
          <a href={page.url}>{page.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default DestopMenu;
