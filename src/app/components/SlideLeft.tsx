"use client";
import { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Link from "next/link";

export const SlideLeft = () => {
  const menuLists = [
    {
      group: "dashboard",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "dashboard",
          lib: "i-mdi-home-outline",
          badges: "",
          color: "text-red-500",
          src: "/dashboards",
        },
      ],
    },
    {
      group: "project",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "project",
          lib: "i-bx-box",
          badges: "",
          color: "text-green-500",
          src: "/projects",
        },
      ],
    },
    {
      group: "account",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "account",
          lib: "i-mdi-account",
          badges: "",
          color: "text-blue-500",
          src: "/account",
        },
      ],
    },
    {
      group: "authentication",
      lib: "i-mdi-menu-down",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "account info",
          lib: "i-mdi-info",
          badges: "",
          color: "text-blue-300",
          src: "/authentication/accountinfo",
        },
        {
          name: "bill detail",
          lib: "i-mdi-document",
          badges: "",
          color: "text-green-500",
          src: "/authentication/billdetail",
        },
        {
          name: "account type",
          lib: "i-mdi-account",
          badges: "",
          color: "text-gray-400",
          src: "/authentication/chooseaccounttype",
        },
        {
          name: "forgot",
          lib: "i-mdi-lock",
          badges: "",
          color: "text-yellow-400",
          src: "/authentication/forgot",
        },
        {
          name: "create new password",
          lib: "i-mdi-lock",
          badges: "",
          color: "text-green-400",
          src: "/authentication/setupnewpass",
        },
        {
          name: "sign in",
          lib: "i-mdi-lock",
          badges: "",
          color: "text-blue-400",
          src: "/authentication/signin",
        },
        {
          name: "sign up",
          lib: "i-mdi-lock",
          badges: "",
          color: "text-red-400",
          src: "/authentication/signup",
        },
        {
          name: "verification two step",
          lib: "i-mdi-check",
          badges: "",
          color: "text-yellow-600",
          src: "/authentication/verificationtwostep",
        },
      ],
    },
    {
      group: "chat",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "chat",
          lib: "i-mdi-chat",
          badges: "",
          color: "text-violet-500",
          src: "/chat",
        },
      ],
    },
    {
      group: "contact",
      lib: "",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "contact",
          lib: "i-mdi-contact",
          badges: "",
          color: "text-orange-500",
          src: "/contact",
        },
      ],
    },
    {
      group: "account",
      lib: "i-mdi-menu-down",
      badges: "",
      color: "",
      src: "",
      child: [
        {
          name: "setting",
          lib: "i-lucide-settings",
          badges: "",
          color: "text-yellow-400",
          src: "/dashboards/settings",
        },
        {
          name: "logout",
          lib: "i-mdi-lock-open",
          badges: "",
          color: "text-red-300",
          src: "#",
        },
      ],
    },
  ];

  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleSubMenu = (id :any) => {
    setOpenMenuId((prevState) => (prevState === id ? null: id));
  };

  return (
    <>
      <aside className="lg:w-64 md:w-48 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 relative">
        <div className="py-3">
          <a href="#" className="flex ms-2 md:me-24">
            <svg
              className="w-10 h-10 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Brandname
            </span>
          </a>
        </div>
        <div className="px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <nav className="space-y-2 font-medium">
            <ul>
            {menuLists.map((menu, i) => (
              <li key={i} className="my-px">
                {menu.child.length === 1 &&
                  menu.child.map((item, index) => (
                    <Link
                      key={index}
                      href={item.src ? item.src : ""}
                      className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span
                        className={`${item.lib} flex items-center justify-center text-base  w-7 h-7 ${item.color}`}
                      ></span>
                      <span className="ms-3 capitalize">{item.name}</span>
                      {item.badges !== "" ? (
                        <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">
                          {item.badges}
                        </span>
                      ) : (
                        ""
                      )}
                    </Link>
                  ))
                }
                
                {menu.child.length > 1 ?
                  <>
                    <Link
                      onClick={() => toggleSubMenu(i)}
                      href={menu.src ? menu.src : ""}
                      className="flex items-center p-2 text-base text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className={`${menu.lib} ${openMenuId && openMenuId === i ? '' : '-rotate-90'} ease-linear duration-300 flex items-center justify-center text-base  w-7 h-7 ${menu.color}`}></span>
                      <span className="ms-3 capitalize">{menu.group}</span>
                    </Link>
                    <AnimatePresence>
                      {openMenuId === i && (
                        <motion.ul
                        initial={{ height: 0, opacity: 0, filter: "blur(10px)"}}
                        animate={{ height: 'auto', opacity: 1, filter: "blur(0px)"}}
                        exit={{ height: 0, opacity: 0, filter: "blur(10px)"}}
                        transition={{ duration: 0.3 }}
                      >
                        {menu.child.map((item, index) => (
                          <li className="my-px" key={index}>
                            <Link
                              href={item.src ? item.src : ""}
                              className="flex items-center p-2 pl-5 font-normal text-sm text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                              <span
                                className={`${item.lib} flex items-center justify-center text-sm  w-6 h-6 ${item.color}`}
                              ></span>
                              <span className="ms-3 capitalize">{item.name}</span>
                              {item.badges !== "" ? (
                                <span className="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">
                                  {item.badges}
                                </span>
                              ) : ""}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                      )}
                    </AnimatePresence>
                  </> : ""
                }
              </li>
            ))}
            </ul>
          </nav>
        </div>
        <p className="text-sm text-gray-600 text-center absolute bottom-0">
          © Brandname 2024. All rights reserved. <a href="#">by Truong Tin</a>
        </p>
      </aside>
    </>
  );
};
