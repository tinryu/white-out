"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

type Menu = {title: string, link: string}
const TopNav: React.FC<{menu: Menu[]}> = ({menu}) => {
  const pathname = usePathname()
  let [menuList, setMenuList] = React.useState(menu);
  return (
    <div className="flex justify-between px-6 pb-10">
      <ul className="flex flex-wrap">
        {menuList.map((item: any, i: number) => (
          <li key={i} className="pr-6">
            <Link
              href={item.link}
              className={item.link === pathname ? "text-sm font-semibold text-slate-950 dark:bg-slate-700 dark:text-slate-50 border-b border-slate-500" : "text-sm text-gray-300 hover:bg-white hover:text-slate-950 dark:text-gray-400 dark:hover:bg-gray-800dark:hover:text-gray-300"}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="group-button">
        <button>...</button>
      </div>
    </div>
  );
};

export default TopNav;
